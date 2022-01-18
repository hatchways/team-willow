const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    sitterId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    accepted: { 
        type: Boolean,
        default: false,
    },
    declined: { 
        type: Boolean,
        default: false,
    },
    paid: { 
        type: Boolean,
        default: false,
    },
});

module.exports = Request = mongoose.model("Request", requestSchema);