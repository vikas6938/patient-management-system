const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema(
    {
        patientId : {type:mongoose.Schema.Types.ObjectId, ref:"patient"},
        doctorId: {type:mongoose.Schema.Types.ObjectId, ref:"doctor"},
        recordImage: {type:String, required:true},
        recordDescription: {type:String, required:true},
    },
  { timestamps: true }
);

const recordModel = mongoose.model("record", recordSchema);
module.exports = recordModel