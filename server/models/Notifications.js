const mongoose = require('mongoose');

const ENUM_NOTIFICATIONS = ['Booking', 'Message', 'System', 'Promo'];

const notificationsSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ENUM_NOTIFICATIONS,
        required: [true, "Not a valid notification type."],
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

module.exports = {
    ENUM_NOTIFICATIONS,
    Notification: mongoose.model("notification", notificationsSchema)
}
