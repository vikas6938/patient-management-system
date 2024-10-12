const mongoose = require("mongoose")

const insuranceSchema = new mongoose.Schema(
  {
    billId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "bill",
      required: true,
    },
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
    diseaseName: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0
    },
    insuranceCompany: {
      type: String,
      required: true,
      enum: [
        "ICICI Life Insurance",
        "LIC Life Insurance",
        "Max Life Insurance",
      ],
    },
    insurancePlan: {
      type: String,
      required: true,
      enum: ["Life", "Medical", "Health"],
    },
    billDate: {
      type: Date,
      required: true,
      default: Date.now,
    },

    claim_amount: {
      type: Number,
      min: 0,
    },

    claimed_amount: {
      type: Number,
    },
  },
  { timestamps: true }
);

const insuranceModel = mongoose.model("insurance", insuranceSchema);

module.exports = insuranceModel