const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth')
const {
    getPayments
} = require('../controllers/payment');

router.route('/')
    .all(protect)
    .get(getPayments);
router.route('/:paymentId/pay')
    .all(protect)
    .get()

router.route('/:paymentId')
    .all(protect)
    .put()

router.route('/paymentId/cancel')
    .all(protect)
    .put()

module.exports = router;