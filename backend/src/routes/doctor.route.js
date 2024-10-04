const { Router } = require("express");
const doctorRouter = Router();
// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const doctorModel = require("../models/doctor.model");

doctorRouter.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    let doctor = await doctorModel.findOne({ email });

    if (!doctor) {
      return res.status(404).json({ error: "User Not Found" });
    }

    //   let isPasswordValid = await bcrypt.compare(password, doctor.password);

    //   if (!isPasswordValid) {
    //     return res.status(400).json({ error: "Password Incorrect" });
    //   }

    if (password !== doctor.password) {
      return res.status(400).json({error:"Incorrect Password"});
    }

    let token = jwt.sign({ doctorId: doctor.id }, "doctor", {
      expiresIn: "4hr",
    });
    res.status(200).json({ message: "doctor Logged in Successfully", token });
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
    doctor: process.env.MAIL_APP_doctor,
    pass: process.env.MAIL_APP_PASS,
  },
});

doctorRouter.post("/forgot_password/generate_otp", async (req, res) => {
  try {
    const { email } = req.body;
    const otp = generateOTP();
    const expirationTime = Date.now() + 5 * 60 * 1000;

    const doctor = await doctorModel.findOne({ email });
    if (doctor) {
      doctor.otp = otp;
      doctor.otpExpiresAt = expirationTime;
      await doctor.save();
    } else {
      return res.status(404).json({error:"doctor not found"});
    }
    const mail = {
      from: process.env.MAIL_APP_doctor,
      to: email,
      subject: "Password Reset Request",
      html: `<h1>Dear doctor use this OTP to Sign In/Up: ${otp}</h1>`,
    };

    await transport.sendMail(mail, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });

    res.status(200).json({message:"NodeMail sent!"});
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

doctorRouter.post("/forgot_password/verify_otp", async (req, res) => {
  try {
    const { otp, email, password, confirmPassword } = req.body;

    const doctor = await doctorModel.findOne({ email });

    if (!doctor) {
      return res.status(404).json({error: "doctor not found"});
    }

    if (password !== confirmPassword) {
      return res.status(400).json({error:"Confirm Password is Not Matching"});
    }

    if (Date.now() > doctor.otpExpiresAt) {
      return res.status(400).json({error:"OTP expired"});
    }

    console.log("Receiving OTP:", otp);
    console.log("Storing OTP:", doctor.otp);

    if (doctor.otp === otp.toString()) {
      // const hashedPassword = await bcrypt.hash(password, 10);
      // const hashedConfirmPassword = await bcrypt.hash(confirmPassword, 10);
      // doctor.password = hashedPassword;
      // doctor.confirmPassword = hashedConfirmPassword
      doctor.password = password;
      doctor.confirmPassword = confirmPassword;

      doctor.otp = undefined;
      doctor.otpExpiresAt = undefined;

      await doctor.save();
      res.status(200).json({message:"Password successfully updated"});
    } else {
      res.status(400).json({error:"Invalid OTP"});
    }
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

doctorRouter.get("/profile/data/:id", async (req, res) => {
  try {
    let { id } = req.params;

    let doctorData = await doctorModel.findById({ id });
    res.status(200).json({message:"Doctor Data Fetched",doctorData});
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

doctorRouter.patch("/profile/data/update/:id", async (req, res) => {
  try {
    let { id } = req.params;

    let updateDoctor = await doctorModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({ message: "doctor Updated", updateDoctor });
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

doctorRouter.patch("/profile/data/update_password/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const { oldPassword, newPassword, confirmPassword } = req.body;
    const doctor = await doctorModel.findById({ id });

    if (!doctor) {
      return res.status(404).json({ error: "User not found" });
    } else {
      if (oldPassword !== doctor.password) {
        return res.status(400).json({ error: "Old Password is Incorrect" });
      } else {
        if (newPassword !== confirmPassword) {
          return res
            .status(400)
            .json({ error: "Confirm Password is Mismatched" });
        } else {
          await doctorModel.findByIdAndUpdate(doctor.id, {
            password: newPassword,
          });

          res.status(200).json({ message: "Password reset successfully" });
        }
      }
    }
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

module.exports = doctorRouter;
