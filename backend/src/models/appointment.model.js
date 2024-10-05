const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientID: { type: mongoose.Schema.Types.ObjectId, ref: 'patient'},
  doctorID: { type: mongoose.Schema.Types.ObjectId, ref: 'doctor'},
//   hospitalID : {type : mongoose.Schema.Types.ObjectId, ref:'hospital'} ,
  specialty:{type:String,required:true},
  country : {type : String, required : true},
  state : {type : String, required : true},
  city : {type : String, required : true},
  appointmentType: { type: String, enum: ['online', 'offline'], required: true },
  appointmentDate: { type: Date, required: true },
  appointmentTime : {type : String , required : true},
  patientIssue: {type : String , required : true},
  disease: {type:String},

}, { timestamps: true });

const appointmentModel = mongoose.model('appointment', appointmentSchema);

module.exports = appointmentModel;