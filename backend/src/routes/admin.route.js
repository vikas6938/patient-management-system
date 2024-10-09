const { Router } = require("express");
const adminRouter = Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const multer = require('multer');
const path = require('path');
const adminModel = require("../models/admin.model");
const userModel = require("../models/patient.model");
const doctorModel = require("../models/doctor.model");
const hospitalModel = require("../models/hospital.model");

adminRouter.post("/signup", async (req, res) => {
  try {
    let {
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
      state,
      city,
      hospital,
      password,
      confirmPassword,
    } = req.body;
    let admin = await adminModel.findOne({ email });
    if (admin) {
      return res.status(400).json({ error: "Admin Already Exist!" });
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ error: "Confirm Password is Not Matching" });
    }
    let hashedPassword = await bcrypt.hash(password, 10);

    let newAdmin = new adminModel({
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
      state,
      city,
      hospital,
      password: hashedPassword,
      confirmPassword: hashedPassword,
    });

    await newAdmin.save();
    res
      .status(200)
      .json({ message: "Admin Registered Successfully", newAdmin });
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

adminRouter.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    let admin = await adminModel.findOne({ email });
    // const admin = await adminModel.findOne({ $or: [{ email: email }, { phone: email }] });

    if (!admin) {
      return res.status(404).json({ error: "Admin Not Found, Register First" });
    }

    let isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: "Password Incorrect" });
    }

    let token = jwt.sign({ adminId: admin.id, role:'admin' }, "admin", {
      expiresIn: "4hr",
    });
    res.status(200).json({ message: "Admin Logged in Successfully", token });
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

const generateOTP = () => {
  let otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
};

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    admin: process.env.MAIL_APP_admin,
    pass: process.env.MAIL_APP_PASS,
  },
});

adminRouter.post("/forgot_password/generate_otp", async (req, res) => {
  try {
    const { email } = req.body;
    const otp = generateOTP();
    const expirationTime = Date.now() + 5 * 60 * 1000;

    const admin = await adminModel.findOne({ email });
    // const admin = await adminModel.findOne({ $or: [{ email: email }, { phone: email }] });
    if (admin) {
      admin.otp = otp;
      admin.otpExpiresAt = expirationTime;
      await admin.save();
    } else {
      return res.status(404).json({ error: "admin not found" });
    }
    const mail = {
      from: process.env.MAIL_APP_admin,
      to: email,
      subject: "Password Reset Request",
      html: `<h1>Dear admin use this OTP to Sign In/Up: ${otp}</h1>`,
    };

    await transport.sendMail(mail, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });

    res.status(200).json({ message: "NodeMail sent!" });
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

adminRouter.post("/forgot_password/verify_otp", async (req, res) => {
  try {
    const { otp, email, password, confirmPassword } = req.body;
    // const { otp, password, confirmPassword } = req.body;

    const admin = await adminModel.findOne({ email });
    // const admin = await adminModel.findOne({ otp, otpExpiresAt: { $gt: Date.now()} });

    if (!admin) {
      return res.status(404).json({ error: "Admin Not Found" });
    }
    // if (!admin) {
    //   return res.status(400).json({ error: "Invalid or Expired OTP" });
    // }

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ error: "Confirm Password is Not Matching" });
    }

    if (Date.now() > admin.otpExpiresAt) {
      return res.status(400).json({ error: "OTP expired" });
    }

    console.log("Receiving OTP:", otp);
    console.log("Storing OTP:", admin.otp);

    if (admin.otp === otp.toString()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      // const hashedConfirmPassword = await bcrypt.hash(confirmPassword, 10);
      admin.password = hashedPassword;
      // admin.confirmPassword = hashedConfirmPassword;

      admin.otp = undefined;
      admin.otpExpiresAt = undefined;

      await admin.save();
      res.status(200).json({ message: "Password successfully updated" });
    } else {
      res.status(400).json({ error: "Invalid OTP" });
    }
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

adminRouter.get("/hospital/get", async (req, res) => {
  try {
    const hospitals = await hospitalModel.find({});
    res.status(200).json({ hospitals });
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

adminRouter.post("/hospital/add", async (req, res) => {
  const { name, address, country, state, city, zipCode } =
    req.body;

  try {
    const newHospital = new Hospital({
      name,
      address,
      country,
      state,
      city,
      zipCode,
    });

    await newHospital.save();

    res
      .status(200)
      .json({ message: "Hospital added successfully", newHospital });
  } catch (error) {
    res.status(500).json({ error, details:error.message });
  }
});

adminRouter.get("/profile/data/:id", async (req, res) => {
  try {
    let { id } = req.params;

    let adminData = await adminModel.findById({ id });
    res.status(200).json({ message: "Admin Data Fetched", adminData });
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);

    if (extname && mimeType) {
      return cb(null, true);
    } else {
      cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});

adminRouter.patch("/profile/data/update/:id",upload.single('profilePic'), async (req, res) => {
  try {
    let { id } = req.params;
    let updateData = req.body

    if (req.file) {
      updateData.profilePic = req.file.filename;
    }

    let updateAdmin = await adminModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    res.status(200).json({ message: "admin Updated", updateAdmin });
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

adminRouter.patch("/profile/data/update_password/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const { oldPassword, newPassword, confirmPassword } = req.body;
    const admin = await adminModel.findById({ id });

    if (!admin) {
      return res.status(404).json({ error: "User not found" });
    }

    if (oldPassword !== admin.password) {
      return res.status(400).json({ error: "Old Password is Incorrect" });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({ error: "Confirm Password is Mismatched" });
    }

    await adminModel.findByIdAndUpdate(admin.id, { password: newPassword });

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

adminRouter.get("/dashboard/total_patients", async (req, res) => {
  try {
    const totalPatients = await userModel.countDocuments();

    res.status(200).json({ message: "Total Patients", totalPatients });
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

adminRouter.get("/dashboard/total_doctors", async (req, res) => {
  try {
    const totalDoctors = await doctorModel.countDocuments();

    res.status(200).json({ message: "Total Doctors", totalDoctors });
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

adminRouter.post("/doctor/add", upload.fields([{ name: 'doctorImage', maxCount: 1 }, { name: 'doctorSignature', maxCount: 1 }]), async (req, res) => {
  try {
    let newDoctorData = req.body;

    if (req.files['doctorImage']) {
      newDoctorData.doctorImage = req.files['doctorImage'][0].path;
    }

    if (req.files['doctorSignature']) {
      newDoctorData.doctorSignature = req.files['doctorSignature'][0].path;
    }
    let newDoctor = new doctorModel(newDoctorData);
    await newDoctor.save();
    res.status(200).json({message:"Doctor Added Successfully", newDoctor})
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

adminRouter.get("/doctor/get", async (req, res) => {
  try {
      let doctor=await doctorModel.find()
      res.status(200).json({message:"Doctors",doctor})
  } catch (error) {
      res.status(500).json({ error, details:error.message });
  }
})

adminRouter.patch("/doctor/update/:id",async (req, res) => {
  try {
      let{id}=req.params
      let doctors=await doctorModel.findByIdAndUpdate(id,req.body,{new:true})
      res.status(200).json(doctors)
  } catch (error) {
      res.status(500).json({ error, details:error.message });
  }
})

adminRouter.delete("/doctor/delete/:id",async (req, res) => {
  try {
      let{id}=req.params
      let doctor=await doctorModel.findByIdAndDelete(id)
      res.status(200).json({message:"Doctor Deleted Successfully", doctor})
  } catch (error) {
      res.status(500).json({ error, details:error.message });
  }
})

adminRouter.get("/patient/get",async (req, res) => {
  try {
      let patients=await userModel.find()
      res.json(patients)
  } catch (error) {
      res.status(500).json({ error, details:error.message });
  }
})

module.exports = adminRouter;
