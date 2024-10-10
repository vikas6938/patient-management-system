const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  strength: { type: String, required: true },
  dose: { type: String, required: true },
  duration: { type: String, required: true },
  whenToTake: { type: String, required: true },
});

const prescriptionSchema = new mongoose.Schema(
  {
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctor",
      required: true,
    },
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "patient",
      required: true,
    },
    appointmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "appointment",
      required: true,
    },
    medicines: [medicineSchema],
    additionalNote: { type: String},
    prescriptionDate: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

const prescriptionModel = mongoose.model("prescription", prescriptionSchema);
module.exports = prescriptionModel