const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName:{type:String ,required:true},
    lastName:{type:String,required:true},
    // username: { type: String },
    email:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    age:{type:Number,required:true},
    height:{type:Number,required:true},
    weight:{type:Number,required:true},
    bloodGroup:{type:String,required:true},
    dateOfBirth:{type:Date,required:true},
    country:{type:String,required:true},
    state:{type:String,required:true},
    city:{type:String,required:true},
    gender:{
        type:String,
        enum:['male','female','prefer not to say'],
        default: 'prefer not to say'
    },
    address:{type:String,required:true},
    password:{type:String,require:true},
    confirmPassword:{type:String,require:true},
    // role:{type:String, enum:["patient","doctor"], required:true, default:"patient"},
    otp: { type: String },
    otpExpiresAt: { type: Date }
},{timestamps:true})

// userSchema.pre('save', function (next) {
//     this.username = `${this.firstName}${this.lastName}`.toLowerCase();
//     next();
//   });

const userModel = new mongoose.model("patient",userSchema)

module.exports = userModel