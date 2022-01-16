const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    sitterId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    date: { 
        type: Date, 
        required: true
    },
    start: { 
        type: String, 
        required: true,
    },
    end: { 
        type: String, 
        required: true,
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