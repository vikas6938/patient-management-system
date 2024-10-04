const mongoose = require("mongoose")

const doctorSchema = new mongoose.Schema({
    // drImage:{type:String},
    // drSignImage:{type:String},
    firstName:{type:String ,required:true},
    lastName:{type:String,required:true},
    // name: {type:String, required:true},
    phoneNumber:{type:String,required:true},
    country:{type:String,required:true},
    state:{type:String,required:true},
    city:{type:String,required:true},
    zipCode:{type:String,required:true},
    address:{type:String,required:true},
    age:{type:Number,required:true},
    experience:{type:String,required:true},
    description:{type:String,required:true},
    onlineConsultationRate:{type:String,required:true},
    emergencyContact: {type:String, required:true},
    hospital:{type:String, required:true},
    hospitalAddress:{type:String, required:true},
    hospitalWebLink:{type:String, required:true},
    gender: {type:String, enum:["male","female","prefer not to say"], required:true, default:"prefer not to say"},
    qualifications:{type:String, required:true},
    specialty:{type:String,required:true},
    workingTime:{type:String, required:true},
    email:{type:String,required:true},
    password:{type:String,require:true},
    otp: { type: String },
    otpExpiresAt: { type: Date }
},{timestamps:true})

const doctorModel = new mongoose.model("doctor",doctorSchema)

module.exports = doctorModel