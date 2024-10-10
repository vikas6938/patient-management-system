const {Router} = require("express");
const appointmentModel = require("../models/appointment.model");
const prescriptionModel = require("../models/prescription.model");
const { doctorAuth } = require("../middleware/auth.middleware");
const prescriptionRouter = Router()

prescriptionRouter.post("/add/:id",doctorAuth,async (req, res) => {
    try {
        let { id } = req.params
        let { medicines, additionalNote } = req.body;
            let appointment=await appointmentModel.findById(id).populate("patientId")

            if(!appointment){
                return res.status(404).json({error:"Appointment Not Found"})
            }
            

            const prescription = new prescriptionModel({
                patientId: appointment.patientId._id,
                doctorId: appointment.doctorId._id,
                appointmentId:appointment.id,
                medicines,
                additionalNote
            });
            await prescription.save();

        res.status(200).json({
            message: "Prescription Created Successfully",
            prescription
        });
    } catch (error) {
        res.status(500).json({ error, details:error.message });
    }
})

prescriptionRouter.get("/get/:id",doctorAuth,async(req,res)=>{
    try {
        let{id}=req.params
        let {doctorId} = req.body
        let data=await prescriptionModel.find({appointmentId:id,doctorId:doctorId}).populate("patientId, doctorId, appointmentId")

        res.status(200).json({message:"Your Prescription", data})

    } catch (error) {
        console.log(error);
        res.status(500).json({error, details: error.message });
    }
})

prescriptionRouter.get("/get/single/:id",doctorAuth,async(req,res)=>{
    try {

        let {id}=req.params
        let data=await prescriptionModel.findById(id).populate("patientId doctorId appointmentId")
        res.status(200).json({message:"Single Prescription",data})
        
    } catch (error) {
        res.status(500).json({error, details:error.message})
    }
})

prescriptionRouter.get("/get/today",doctorAuth, async (req, res) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today); 
        tomorrow.setDate(today.getDate() + 1);

        let data = await prescriptionModel.find({
            prescriptionDate: {
                $gte: today,
                $lt: tomorrow
            }
        }).populate("patientId doctorId appointmentId");

        res.status(200).json({ message: "Today's Prescriptions", data });
    } catch (error) {
        res.status(500).json({ error, details: error.message });
    }
});


module.exports = prescriptionRouter