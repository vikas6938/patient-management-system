const { Router } = require("express");
const userRouter = Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const userModel = require("../models/user");

userRouter.post("/signup", async (req, res) => {
  let { name, email, password, role } = req.body;
  let user = await userModel.findOne({ email });
  if (user) {
    return res.status(400).json({ error: "User Already Exist!" });
  }
  let hashedPassword = await bcrypt.hash(password, 10);

  let newUser = new userModel({
    name,
    email,
    password: hashedPassword,
    role,
  });

  await newUser.save();
  res.status(201).json({ message: "User Registered Successfully" });
});

userRouter.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({ error: "Register First" });
  }

  let isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({ error: "Password Incorrect" });
  }

  let token = jwt.sign({ userId: user.id, role: user.role }, "yash", {
    expiresIn: "4hr",
  });
  res.status(201).json({ message: "User Logged in Successfully", token });
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

userRouter.post("forgot_password/generate_otp", async (req, res) => {
  const { email } = req.body;
  const otp = generateOTP();
  const expirationTime = Date.now() + 5 * 60 * 1000;

  
  const user = await userModel.findOne({ email });
  if (user) {
    user.otp = otp;
    user.otpExpiresAt = expirationTime;
    await user.save();
  } else {
    return res.status(404).send("User not found");
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

  res.send("NodeMail is now sent!");
});

userRouter.post("forgot_password/otp_verify", async (req, res) => {
    const { otp, password, email } = req.body;
  
    const user = await userModel.findOne({ email });
  
    if (!user) {
      return res.status(404).send("User not found");
    }
  
    if (Date.now() > user.otpExpiresAt) {
      return res.status(400).send("OTP expired");
    }
  
    console.log("Receiving OTP:", otp);
    console.log("Storing OTP:", user.otp);
  
    if (user.otp === otp.toString()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
  
      user.otp = undefined;
      user.otpExpiresAt = undefined;
  
      await user.save();
      res.send("Password successfully updated");
    } else {
      res.status(400).send("Invalid OTP");
    }
  });
  

module.exports = userRouter;
