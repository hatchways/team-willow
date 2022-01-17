const mongoose = require('mongoose');

const notificationsSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Booking', 'Message', 'System', 'Promo'],
        required: [true, "Wrong type."],
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isRead: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now(),
    }
})

module.exports = Notification = mongoose.model("notification", notificationsSchema);

