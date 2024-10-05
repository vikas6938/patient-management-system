const { Router } = require("express");
const userRouter = Router();
const appointmentModel = require("../models/appointment.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const userModel = require("../models/patient.model");

userRouter.post("/signup", async (req, res) => {
  try {
    let {
      firstName,
      lastName,
      email,
      phoneNumber,
      age,
      height,
      weight,
      bloodGroup,
      dateOfBirth,
      country,
      state,
      city,
      gender,
      address,
      password,
      confirmPassword,
    } = req.body;
    let user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User Already Exist!" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({error: "Confirm Password is Not Matching"});
    }
    let hashedPassword = await bcrypt.hash(password, 10);

    let newUser = new userModel({
      firstName,
      lastName,
      email,
      phoneNumber,
      age,
      height,
      weight,
      bloodGroup,
      dateOfBirth,
      country,
      state,
      city,
      gender,
      address,
      password: hashedPassword,
      confirmPassword: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User Registered Successfully" });
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "Register First" });
    }

    let isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: "Password Incorrect" });
    }

    let token = jwt.sign({ userId: user.id }, "patient", {
      expiresIn: "4hr",
    });
    res.status(200).json({ message: "User Logged in Successfully", token });
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
    user: process.env.MAIL_APP_USER,
    pass: process.env.MAIL_APP_PASS,
  },
});

userRouter.post("/forgot_password/generate_otp", async (req, res) => {
  try {
    const { email } = req.body;
    const otp = generateOTP();
    const expirationTime = Date.now() + 5 * 60 * 1000;

    const user = await userModel.findOne({ email });
    if (user) {
      user.otp = otp;
      user.otpExpiresAt = expirationTime;
      await user.save();
    } else {
      return res.status(404).json({error:"User not found"});
    }
    const mail = {
      from: process.env.MAIL_APP_USER,
      to: email,
      subject: "Password Reset Request",
      html: `<h1>Dear User use this OTP to Sign In/Up: ${otp}</h1>`,
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

userRouter.post("/forgot_password/verify_otp", async (req, res) => {
  try {
    const { otp, email, password, confirmPassword } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({error:"User not found"});
    }

    if (password !== confirmPassword) {
      return res.status(400).json({error:"Confirm Password is Not Matching"});
    }

    if (Date.now() > user.otpExpiresAt) {
      return res.status(400).json({error:"OTP expired"});
    }

    console.log("Receiving OTP:", otp);
    console.log("Storing OTP:", user.otp);

    if (user.otp === otp.toString()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const hashedConfirmPassword = await bcrypt.hash(confirmPassword, 10);
      user.password = hashedPassword;
      user.confirmPassword = hashedConfirmPassword;

      user.otp = undefined;
      user.otpExpiresAt = undefined;

      await user.save();
      res.status(200).json({message:"Password successfully updated"});
    } else {
      res.status(400).json({error:"Invalid OTP"});
    }
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

userRouter.get("/profile/data/:id", async (req, res) => {
  try {
    let { id } = req.params;

    let userData = await userModel.findById({ id });
    res.status(200).json({message:"User Data Fetched",userData});
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

userRouter.patch("/profile/data/update/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let {
      firstName,
      lastName,
      // username,
      email,
      phoneNumber,
      age,
      height,
      weight,
      bloodGroup,
      dateOfBirth,
      country,
      state,
      city,
      gender,
      address,
    } = req.body;

    let updateUser = await userModel.findByIdAndUpdate(
      id,
      firstName,
      lastName,
      // username,
      email,
      phoneNumber,
      age,
      height,
      weight,
      bloodGroup,
      dateOfBirth,
      country,
      state,
      city,
      gender,
      address,
      { new: true }
    );

    res.status(200).json({ message: "User Updated", updateUser });
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});



module.exports = userRouter;
