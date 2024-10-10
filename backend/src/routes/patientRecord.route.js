const {Router} = require("express");
const recordModel = require("../models/patientRecord.model");
const { doctorAuth } = require("../middleware/auth.middleware");
const recordRouter = Router()
const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({
    storage: storage,
    limits: { fileSize: 2 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|jpg|png/;
      const extname = fileTypes.test(
        path.extname(file.originalname).toLowerCase()
      );
      const mimeType = fileTypes.test(file.mimetype);
  
      if (extname && mimeType) {
        return cb(null, true);
      } else {
        cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
      }
    },
  });

recordRouter.post("/add",upload.single("recordImage"),doctorAuth,async(req,res)=>{
    try {
        let recordImage = req.file ? req.file.path : null;
        let newRecord = new recordModel({
            patientId:req.body.patientId,
            doctorId:req.doctor.doctorId,
            recordImage:recordImage,
            recordDescription:req.body.recordDescription
        })

        await newRecord.save()
        res.status(200).json({message:"Record Added",newRecord})

    } catch (error) {
        console.log(error.message);
        res.status(500).json({error, details:error.message})
    }
})

recordRouter.get("/get",doctorAuth,async(req,res)=>{
    try {
        let records = await recordModel.find({doctorId:req.doctor.doctorId})
        res.status(200).json({records})
    } catch (error) {
        res.status(500).json({error,details:error.message})
    }
})

module.exports = recordRouter