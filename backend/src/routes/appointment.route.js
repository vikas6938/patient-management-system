const { Router } = require("express");
const appointmentRouter = Router();
const io = require("socket.io")
const appointmentModel = require("../models/appointment.model");
const { patientAuth, doctorAuth } = require("../middleware/auth.middleware");
const userModel = require("../models/patient.model");
const notificationModel = require("../models/notification.model");

appointmentRouter.post("/add", patientAuth, async (req, res) => {
  try {

    let patient = await userModel.findById(req.patient.userId)

    const newAppointment = await appointmentModel.create(
      req.body,
    );

    newAppointment.status = "pending"

    patient.appointmentId.push(newAppointment._id)
    await patient.save()

    const doctorNotification = new notificationModel({
      doctorId: doctorId,
      message: `A new appointment has been booked by ${patient.firstName}`,
      appointmentId: newAppointment._id,
    });
    
    await doctorNotification.save();


    res.status(200).json({ message: "Appointment booked", newAppointment });
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

appointmentRouter.get("/get_all/", patientAuth, async (req, res) => {
  try {
    let data = await appointmentModel
      .find({patientId:req.patient.userId})
      .populate("hospitalId patientId doctorId")
      .populate("patientId")
      .populate("doctorId");

    if (!data) {
      return res.status(404).json({ error: "Appointment Not Found" });
    }

    res.status(200).json({ message: "Appointments!", data });
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

appointmentRouter.get("/doctor/get_all/", doctorAuth, async (req, res) => {
  try {
    let data = await appointmentModel
      .find({doctorId:req.doctor.doctorId})
      .populate("hospitalId patientId doctorId")
      .populate("patientId")
      .populate("doctorId");

    if (!data) {
      return res.status(404).json({ error: "Appointment Not Found" });
    }

    res.status(200).json({ message: "Appointments!", data });
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

appointmentRouter.get("/doctor/all_patient", doctorAuth, async(req,res)=>{
  try {
    let data = await userModel.find()
    res.status(200).json({message:"All Patients",data})
  } catch (error) {
    res.status(500).json({error, details:error.message})
  }
})

appointmentRouter.get("/doctor/single_patient/:patientId", doctorAuth, async(req,res)=>{
  try {
    let {patientId} = req.params
    let data = await userModel.findById(patientId).populate("appointmentId")
    res.status(200).json({message:"All Patients",data})
  } catch (error) {
    res.status(500).json({error, details:error.message})
  }
})

appointmentRouter.patch("/update/:id", patientAuth, async (req, res) => {
  try {
    let { id } = req.params;
    let data = await appointmentModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ message: "Appointment Updated", data });
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

appointmentRouter.delete("/delete/:id", patientAuth, async (req, res) => {
  try {
    let { id } = req.params;
    let data = await appointmentModel.findByIdAndDelete(id);
    res.json({ message: "Appointment Deleted Successfully", data });
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

appointmentRouter.get("/patient/history/:patientId",patientAuth, async (req, res) => {
  try {
    const { patientId } = req.params;

    const appointmentHistory = await appointmentModel.find({ patientId }).populate("doctorId");

    res
      .status(200)
      .json({ message: "Patient Appointment History", appointmentHistory });
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

appointmentRouter.get("/doctor/history/:doctorId",doctorAuth,async (req, res) => {
    try {
      const { doctorId } = req.params;

      const appointmentHistory = await appointmentModel.find({ doctorId }).populate("patientId");

      res
        .status(200)
        .json({ message: "Doctor Appointment History", appointmentHistory });
    } catch (error) {
      res.status(500).json({ error, details: error.message });
    }
  }
);

appointmentRouter.patch("/cancel/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const appointment = await appointmentModel.findById(id);

    if (!appointment) {
      return res.status(404).json({ message: "Appointment Not Found" });
    }

    appointment.status = "cancelled";
    await appointment.save();

    res.status(200).json({ message: "Appointment Cancelled", appointment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = appointmentRouter;
