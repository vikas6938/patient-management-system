const { Router } = require("express");
const appointmentModel = require("../models/appointment.model");
const appointmentRouter = Router();

appointmentRouter.post("/add", async (req, res) => {
  try {
    const { doctorID, appointmentDate, appointmentTime } = req.body;

    const appointment = await appointmentModel.findOne({
      doctorID,
      appointmentDate,
      appointmentTime,
    });

    if (appointment) {
      return res
        .status(400)
        .json({ message: "Appointment Could Not be Done!" });
    }

    const newAppointment = new appointmentModel(req.body);
    await newAppointment.save();

    res
      .status(200)
      .json({ message: "Appointment booked", data: newAppointment });
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

appointmentRouter.get("/get_all/:patientId", async (req, res) => {
  try {
    let {patientId} = req.params
    let data = await appointmentModel.find({id:patientId})
    res.json(data);
  } catch (error) {
    res.status(500).json({ error, details: error.message });
  }
});

appointmentRouter.patch("/update/:id", async (req, res) => {
    try {
        let { id } = req.params
        let data = await appointmentModel.findByIdAndUpdate(id,req.body, { new: true })
        res.json({ message: "Appointment Updated", data })

    } catch (error) {
        res.status(500).json({ error, details: error.message });
    }
})

appointmentRouter.delete("/delete/:id",async (req, res) => {
    try {
        let { id } = req.params
        let data = await appointmentModel.findByIdAndDelete(id)
        res.json({ message: "Appointment Deleted Successfully", data })

    } catch (error) {
        res.status(500).json({ error, details: error.message });
    }

})

appointmentRouter.get("/patient/history/:patientId",async(req,res)=>{
  try {
    const { patientId } = req.params;

    const appointmentHistory = await appointmentModel.find({ patientId })

    res.status(200).json({ message: 'Patient Appointment History', appointmentHistory });
  } catch (error) {
    res.status(500).json({ error, details:error.message });
  }
})

appointmentRouter.get("/doctor/history/:doctorId",async(req,res)=>{
  try {
    const { doctorId } = req.params;

    const appointmentHistory = await appointmentModel.find({ doctorId })

    res.status(200).json({ message: 'Doctor Appointment History', appointmentHistory });
  } catch (error) {
    res.status(500).json({ error, details:error.message });
  }
})

appointmentRouter.patch("/cancel/:id",async(req,res)=>{
  try {
    const { id } = req.params;

    const appointment = await appointmentModel.findById(id);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment Not Found' });
    }

    appointment.status = 'cancelled';
    await appointment.save();

    res.status(200).json({ message: 'Appointment Cancelled', appointment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

module.exports = appointmentRouter;
