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

module.exports = appointmentRouter;
