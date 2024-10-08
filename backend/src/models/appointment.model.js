const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'patient'},
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'doctor'},
//   hospitalId : {type : mongoose.Schema.Types.ObjectId, ref:'hospital'} ,
  specialty:{type:String,required:true},
  country : {type : String, required : true},
  state : {type : String, required : true},
  city : {type : String, required : true},
  appointmentType: { type: String, enum: ['online', 'offline'], required: true },
  appointmentDate: { type: Date, required: true },
  appointmentTime : {type : String , required : true},
  status:{type:String, enum:["cancelled","completed"]},
  patientIssue: {type : String , required : true},
  disease: {type:String},

}, { timestamps: true });

const appointmentModel = mongoose.model('appointment', appointmentSchema);

module.exports = appointmentModel;