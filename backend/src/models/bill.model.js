const mongoose = require("mongoose")
const mongooseSequence = require("mongoose-sequence")

const autoIncrement = mongooseSequence(mongoose);

const billSchema = new mongoose.Schema(
  {
    billNumber: {
      type:  Number,
      unique: true,
    },
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "patient",
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctor",
    },
    description: {
      type: String,
    },
    paymentType: {
      type: String,
      enum: ["online", "cash", "insurance"],
    },
    date: {
      type: Date,
      default: Date.now,
    },
    time: {
      type: String,
      validate: {
        validator: function (valid) {
          return /^([0-9]{1,2}):([0-9]{2})$/.test(valid);
        },
        message: (props) => `${props.value} not valid time format!`,
      },
    },
    amount: {
      type: Number,
      min: 0,
    },
    discount: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    tax: {
      type: Number,
      min: 0,
    },
    totalAmount: {
      type: Number,
      set: function () {
        return (
          this.amount -
          this.amount * (this.discount / 100) +
          this.amount * (this.tax / 100)
        );
      },
    },
    insuranceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "insurance",
    },
  },
  {
    timestamps: true,
  }
);

billSchema.plugin(autoIncrement, {
  inc_field: "billNumber",
  start_seq: 1100,
});


billSchema.set("toJSON", { virtuals: true });

const billModel = mongoose.model("bill", billSchema);

module.exports = billModel