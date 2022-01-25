const Payments = require('../models/Payment');
const asyncHandler = require("express-async-handler");

exports.getPayments = asyncHandler( async (req, res, next) => {
    const payments = await Payments.find({userId: req.user.id}).exec();
    res.status(200).json({success : payments});
});

exports.getPayment = asyncHandler( async (req, res, next) => {
    const paymentId = req.params.paymentId;
    const payment = await Payments.findById(paymentId);
    res.status(200).json({success: payment });
})

exports.servicePayment = asyncHandler( async (req, res, next) => {
    
})

