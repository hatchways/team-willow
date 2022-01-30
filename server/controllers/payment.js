const asyncHandler = require("express-async-handler");
const Payment = require('../models/Payment');
const stripe = require('stripe')(process.env.STRIPE_SECRET);

// @route GET /
// @desc Get a list of payments from logged in user id
// @access Private
exports.getPayments = asyncHandler( async (req, res, next) => {
    const payments = await Payment.find({userId: req.user.id});
    res.status(200).json({ success: true, payments });
});

// @route POST /
// @desc Creates a payment intent
// @access Private
exports.createPaymentIntent = asyncHandler( async (req, res, next) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.newPayment.totalPayment,
        currency: 'cad',
        payment_method_types: ['card'],
    })
    await Payment.updateOne({ _id: req.newPayment.id }, { paymentIntentsId: paymentIntent.id });
    res.status(201).json({ success: paymentIntent.client_secret });
});

// @route GET /:paymentId
// @desc Gets a specific paymentIntent from Stripe
// @access Private
exports.getPayment = asyncHandler( async (req, res, next) => {
    const paymentIntent = await stripe.paymentIntents.retrieve(req.params.paymentId);
    if (!paymentIntent) {
        res.status(404).json({failure: 'Cannot retrieve payment data.'})
    }
    res.status(200).json({ success: paymentIntent });
});

// @route POST /:paymentId/pay
// @desc Confirms an existing paymentIntent
// @access Private
exports.confirmPaymentIntent = asyncHandler( async (req, res, next) => {
    const { paymentMethod } = req.body;
    const paymentIntent = await stripe.paymentIntents.confirm(req.params.paymentId, { payment_method: paymentMethod });
    if (paymentIntent.status === 'succeeded') {
        await Payment.updateOne({ _id: req.paymentDoc.id }, { isPaid: true });
    }
    res.status(200).json({ success: paymentIntent.status });
});

// @route GET /:paymentId/cancel
// @desc Cancels paymentIntent
// @access Private
exports.cancelPaymentIntent = asyncHandler( async (req, res, next) => {
    const paymentIntent = await stripe.paymentIntents.cancel(req.paymentDoc.paymentIntentsId);
    if(paymentIntent.status === 'canceled') {
        req.paymentDoc.isCanceled = true;
        await req.paymentDoc.save();
    }
    res.status(200).json({ success: paymentIntent.status });
});