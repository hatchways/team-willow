const mongoose = require('mongoose');

const CENTS = 100; //smallest currency unit

const PaymentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
    },
    sitterId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
    },
    rate: {
        type: Number,
        default: 1,
        min: 1,
        max: 10000,
    },
    hoursOfService: {
        type: Number,
        required: true,
        min: 1,
    },
    totalPayment: {
        type: Number,
        default: 1,
        min: 1,
        max: 99999999,
    },
    customerId: {
        type: String,
    },
    paymentIntentsId: {
        type: String,
    },
    isPaid: {
        type: Boolean,
        default: false,
    },
    isCanceled: {
        type: Boolean,
        default: false,
    }
})

PaymentSchema.pre('save', function(next) {
    this.rate *= CENTS;
    this.totalPayment = this.rate * this.hoursOfService;
    next();
})

module.exports = Payment = new mongoose.model('Payment', PaymentSchema);