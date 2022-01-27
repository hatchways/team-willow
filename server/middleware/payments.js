const { body, param, validationResult } = require('express-validator');
const asyncHandler = require("express-async-handler");
const Payments = require('../models/Payment');

//validators
exports.validatePayment = [
    body('sitterId').notEmpty().bail().isString(),
    body('rate').notEmpty().bail().isNumeric(),
    body('hoursOfService').notEmpty().bail().isNumeric(),
];

exports.validatePaymentId = [
    param('paymentId').notEmpty().bail().isString(),
    body('paymentMethod').notEmpty().bail().isString(),
];

exports.validatePaymentResult = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors});
    }
    next();
}

//DB Queries
exports.findPaymentOwner = asyncHandler(async (req, res, next) => {
    const payment = await Payments.findOne({ userId: req.user.id, paymentIntentsId: req.params.paymentId});
    req.paymentDoc = payment;
    next();
});

exports.findPaymentMerchant = asyncHandler(async (req, res, next) => {
    const payment = await Payments.findOne({ userId: req.user.id, paymentIntentsId: req.params.paymentId}).exec();
    //TODO: Update query to search for sitterId
    req.paymentDoc = payment;
    next();
})
exports.createPayment = asyncHandler( async (req, res, next) => {
    const { sitterId, rate, hoursOfService } = req.body;
    const payment = new Payments({
        userId: req.user.id,
        sitterId,
        rate,
        hoursOfService,
    });
    await payment.save();
    req.newPayment = payment;
    console.log("Payment Document created.");
    next()
});

exports.verifySitterType = asyncHandler( async (req, res, next)=> {
    //TODO: verify req.user.id is a sitter and not an owner.
})

