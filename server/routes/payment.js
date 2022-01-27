const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth')
const {
    getPayments,
    getPayment,
    createPaymentIntent,
    confirmPaymentIntent,
    cancelPaymentIntent,
} = require('../controllers/payment');
const {
    validatePayment,
    findPaymentOwner,
    findPaymentMerchant,
    validatePaymentId,
    createPayment,
    validatePaymentResult
} = require('../middleware/payments');

router.route('/:paymentId/pay')
    .all(protect)
    .post(validatePaymentId, validatePaymentResult, findPaymentOwner, confirmPaymentIntent);
router.route('/:paymentId/cancel')
    .all(protect)
    .get(validatePaymentId, validatePaymentResult, findPaymentMerchant, cancelPaymentIntent);
router.route('/:paymentId')
    .all(protect)
    .get(validatePaymentId, validatePaymentResult, getPayment);
router.route('/')
    .all(protect)
    .get(getPayments)
    .post(validatePayment, validatePaymentResult, createPayment, createPaymentIntent);

module.exports = router;