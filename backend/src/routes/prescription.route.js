const {Router} = require("express");
const appointmentModel = require("../models/appointment.model");
const prescriptionModel = require("../models/prescription.model");
const prescriptionRouter = Router()

prescriptionRouter.post("/add/:id",async (req, res) => {
    try {
        let { id } = req.params
        let { medicines, additionalNote } = req.body;
            let appointment=await appointmentModel.findById(id)

            if(!appointment){
                return res.status(404).json({error:"Appointment Not Found"})
            }

            const prescription = new prescriptionModel({
                patientID: appointment.patientId._id,
                doctorID: appointment.doctorId._id,
                appointmentID:appointment.id,
                medicines,
                additionalNote
            });
            await prescription.save();

        res.status(201).json({
            message: "Prescription Created Successfully",
            prescription
        });
    } catch (error) {
        res.status(500).json({ error, details:error.message });
    }
})

prescriptionRouter.get("/get/:id",async(req,res)=>{
    try {
        let{id}=req.params
        let {doctorId} = req.body
        let data=await prescriptionModel.find({appointmentId:id,DoctorID:doctorId})
        .populate({ path: "patientId", select: "firstName lastName phoneNumber age gender" }) 
        .populate({ path: "doctorId", select: "firstName lastName" })
        .populate({ path: "appointmentId", select: "appointmentDate appointmentTime" });

        res.status(200).json({message:"Your Prescription", data})

    } catch (error) {
        console.log(error);
        res.status(500).json({error, details: error.message });
    }
})

module.exports = prescriptionRouter