const mongoose = require('mongoose');

const notificationsSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Booking', 'Message', 'System', 'Promo'],
        required: true,
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
        type: String,
        default: new Date().toDateString(),
    }
});

module.exports = Notification = mongoose.model("notification", notificationsSchema);

