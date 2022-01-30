const { body, param, validationResult } = require('express-validator');
const asyncHandler = require("express-async-handler");
const Payment = require('../models/Payment');

exports.validatePayment = [
    body('sitterId').notEmpty().bail().isString(),
    body('rate').notEmpty().bail().isNumeric(),
    body('hoursOfService').notEmpty().bail().isNumeric(),
];

exports.validateConfirmPayment = [
    param('paymentId').notEmpty().bail().isString(),
    body('paymentMethod').notEmpty().bail().isString(),
];

exports.validatePaymentId = [
    this.validateConfirmPayment[0],
];

exports.validatePaymentResult = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors});
    }
    next();
}

exports.findPayment = asyncHandler(async (req, res, next) => {
    const payment = await Payment.findOne({ userId: req.user.id, paymentIntentsId: req.params.paymentId});
    req.paymentDoc = payment;
    next();
});

exports.createPayment = asyncHandler( async (req, res, next) => {
    const { sitterId, rate, hoursOfService } = req.body;
    const payment = new Payment({
        userId: req.user.id,
        sitterId,
        rate,
        hoursOfService,
    });
    await payment.save();
    req.newPayment = payment;
    next()
});