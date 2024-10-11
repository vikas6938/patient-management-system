const { Router } = require("express");
const billRouter = Router();
const billModel = require("../models/bill.model");

billRouter.post("/create", async (req, res) => {
  try {
    const newBill = new billModel(req.body);
    await newBill.save();
    res.status(200).json({message:"Bill Created!",newBill});
  } catch (error) {
    res.status(500).json({error,details:error.message});
  }
});

billRouter.get("/get", async (req, res) => {
  try {
    const bills = await billModel
      .find()
      .populate("patientId doctorId insuranceId");
    res.status(200).json({message:"Bills!",bills});
  } catch (error) {
    res.status(500).json({error,details:error.message});
  }
});

billRouter.get("/single/:id", async (req, res) => {
  try {
    const bill = await billModel
      .findById(req.params.id)
      .populate("patientId doctorId insuranceId");
    if (!bill) {
      return res.status(404).json({error:"Bill Not Found"});
    }
    res.status(200).json({message:"Bill!",bill});
  } catch (error) {
    res.status(500).json({error,details:error.message});
  }
});

billRouter.patch("/update/:id", async (req, res) => {
  try {
    const updatedBill = await billModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedBill) {
      return res.status(404).json({error:"Bill Not Found!"});
    }
    res.status(200).json({message:"Bill Updated!",updatedBill});
  } catch (error) {
    res.status(500).json({error,details:error.message});
  }
});

billRouter.delete("/delete/:id", async (req, res) => {
  try {
    const bill = await billModel.findByIdAndDelete(req.params.id);
    if (!bill) {
      return res.status(404).json({error:"Bill Not Found!"});
    }
    res.status(200).json({message:"Bill Deleted!",bill});
  } catch (error) {
    res.status(500).json({error,details:error.message});
  }
});

module.exports = billRouter;
