const mongoose = require("mongoose")

const hospitalSchema = new mongoose.Schema({
    name:{type:String, required:true},
    address:{type:String, required:true},
    country:{type:String, required:true},
    state:{type:String, required:true},
    city:{type:String, required:true},
    zipCode:{type:String, required:true}
},{timestamps:true})

const hospitalModel = new mongoose.model("hospital",hospitalSchema)

module.exports = hospitalModel