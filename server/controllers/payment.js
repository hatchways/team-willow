const asyncHandler = require("express-async-handler");
const Payments = require('../models/Payment');
const stripe = require('stripe')(process.env.STRIPE_SECRET);

// GET: "/"
exports.getPayments = asyncHandler( async (req, res, next) => {
    const payments = await Payments.find({userId: req.user.id});
    res.status(200).json({success: payments});
});

// POST: "/"
exports.createPaymentIntent = asyncHandler( async (req, res, next) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.newPayment.totalPayment,
        currency: 'cad',
        payment_method_types: ['card'],
    })
    await Payments.updateOne({ _id: req.newPayment.id }, { paymentIntentsId: paymentIntent.id });
    res.status(201).json({ success: paymentIntent.client_secret });
});

// GET: "/:paymentId"
exports.getPayment = asyncHandler( async (req, res, next) => {
    const paymentIntent = await stripe.paymentIntents.retrieve(req.params.paymentId);
    if (!paymentIntent) {
        res.status(404).json({failure: 'Cannot retrieve payment data.'})
    }
    res.status(200).json({success: paymentIntent });
});

// POST "/:paymentId/pay"
exports.confirmPaymentIntent = asyncHandler( async (req, res, next) => {
    const { paymentMethod } = req.body;
    const paymentIntent = await stripe.paymentIntents.confirm(req.params.paymentId, { payment_method: paymentMethod });
    if (paymentIntent.status === 'succeeded') {
        await Payments.updateOne({ _id: req.paymentDoc.id }, { isPaid: true });
    }
    res.status(200).json({success: paymentIntent.status});
});

//GET "/:paymentId/cancel"
exports.cancelPaymentIntent = asyncHandler( async (req, res, next) => {
    if(!req.paymentDoc) {
        res.status(404).json({failure: 'cannot find merchant.'});
        return;
    }
    const paymentIntent = await stripe.paymentIntents.cancel(req.paymentDoc.paymentIntentsId);
    if(paymentIntent.status === 'canceled') {
        req.paymentDoc.isCanceled = true;
        await req.paymentDoc.save();
        res.status(200).json({ success: paymentIntent.status });
        return;
    }
    res.status(404).json({ failure: paymentIntent.status })
});