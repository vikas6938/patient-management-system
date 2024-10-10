const jwt = require("jsonwebtoken");

const adminAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    let decoded = jwt.verify(token, "admin");

    req.admin = decoded;

    next();
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
};

const doctorAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    let decoded = jwt.verify(token, "doctor");

    req.doctor = decoded;

    next();
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
};

const patientAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    let decoded = jwt.verify(token, "patient");

    req.patient = decoded;

    next();
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
};

module.exports = {adminAuth, doctorAuth, patientAuth};
