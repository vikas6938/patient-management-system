const { Router } = require("express");
const adminRouter = Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const adminModel = require("../models/admin.model");
const userModel = require("../models/patient.model");
const doctorModel = require("../models/doctor.model");

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
      return res.status(400).json({ error: "admin Already Exist!" });
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
      .json({ message: "admin Registered Successfully", newAdmin });
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

adminRouter.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    let admin = await adminModel.findOne({ email });

    if (!admin) {
      return res.status(400).json({ error: "Register First" });
    }

    let isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: "Password Incorrect" });
    }

    let token = jwt.sign({ adminId: admin.id }, "admin", {
      expiresIn: "4hr",
    });
    res.status(201).json({ message: "admin Logged in Successfully", token });
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

    const admin = await adminModel.findOne({ email });

    if (!admin) {
      return res.status(404).json({ error: "admin not found" });
    }

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
      const hashedConfirmPassword = await bcrypt.hash(confirmPassword, 10);
      admin.password = hashedPassword;
      admin.confirmPassword = hashedConfirmPassword;

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

adminRouter.get("/profile/data/:id", async (req, res) => {
  try {
    let { id } = req.params;

    let adminData = await adminModel.findById({ id });
    res.status(200).json({ message: "Admin Data Fetched", adminData });
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

adminRouter.patch("/profile/data/update/:id", async (req, res) => {
  try {
    let { id } = req.params;

    let updateAdmin = await adminModel.findByIdAndUpdate(id, req.body, {
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

adminRouter.post("/doctor/add",async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})  

module.exports = adminRouter;
