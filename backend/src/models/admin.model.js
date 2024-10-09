const mongoose = require("mongoose")

// const hospitalSchema = new mongoose.Schema({
//     name:{type:String, required:true},
//     address:{type:String, required:true},
//     country:{type:String, required:true},
//     state:{type:String, required:true},
//     city:{type:String, required:true},
//     zipCode:{type:String, required:true}
// })

const adminSchema = new mongoose.Schema({
    firstName:{type:String ,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true, unique:true},
    phoneNumber:{type:String,required:true},
    country:{type:String,required:true},
    state:{type:String,required:true},
    city:{type:String,required:true},
    // hospital:[hospitalSchema],
    profilePic:{type:String, default:""},
    hospital: [{type:mongoose.Schema.Types.ObjectId, ref:"hospital"}],
    password:{type:String,require:true},
    // confirmPassword:{type:String,require:true},
    otp: { type: String },
    otpExpiresAt: { type: Date }
},{timestamps:true})

const adminModel = new mongoose.model("admin",adminSchema)

module.exports = adminModel