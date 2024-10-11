const { Router } = require("express");
const insuranceRouter = Router()
const insuranceModel = require("../models/insurance.model");

insuranceRouter.post("/create" , async (req, res) => {
    try {
        const insurance = await insuranceModel(req.body);
        await insurance.save();
        res.status(200).json({message:"Insurance Created!",insurance});
    } catch (error) {
        res.status(400).json({error,details:error.message});
    }
})

insuranceRouter.get("/get/all" , async (req, res) => {
    try {
        const insurances = await insuranceModel.find()
            .populate('billId')
            .populate('doctorId')
            .populate('patientId');
        res.status(200).json({message:"Insurance!",insurance});
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch insurance records',
            error: error.message,
        });
    }
})

insuranceRouter.get("/single/:id" , async (req, res) => {
    try {
        const insurance = await insuranceModel.findById(req.params.id)
            .populate('billId')
            .populate('doctorId')
            .populate('patientId');

        if (!insurance) {
            return res.status(404).json({error:"Insurance Not Found!"});
        }

        res.status(200).json({message:"Insurance!",insurance});
    } catch (error) {
        res.status(500).json({error,details:error.message});
    }
})

insuranceRouter.patch("/update/:id" , async (req, res) => {
    try {
        const updatedInsurance = await insuranceModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updatedInsurance) {
            return res.status(404).json({error:"Insurance Not Found!"});
        }

        res.status(200).json({message:"Insurance Updated!",updatedInsurance});
    } catch (error) {
        res.status(500).json({error,details:error.message});
    }
})

insuranceRouter.delete("/delete/:id" , async (req, res) => {
    try {
        const insurance = await insuranceModel.findByIdAndDelete(req.params.id);

        if (!insurance) {
            return res.status(404).json({error:"Insurance Not Found!"});
        }

        res.status(200).json({message:"Insurance Deleted!",insurance});
    } catch (error) {
        res.status(500).json({error,details:error.message});
    }
})

module.exports = insuranceRouter