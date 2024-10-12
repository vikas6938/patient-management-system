const {Router} = require("express")
const paymentRouter = Router()
const razorpay = require("razorpay");

const payment = new razorpay({
  key_id: "enter_your_key_id_here",
  key_secret: "enter_your_key_secret_here",
});

paymentRouter.post("/order", (req, res) => {
  let { amount } = req.body;
  let options = {
    amount: amount,
  };
  payment.orders.create(options, (err, order) => {
    if (err) {
      return res.status(400).json({ err, details: err.message });
    }
    res.status(200).json({ message: "Your Payment Order Done!", order });
  });
});

module.exports = paymentRouter