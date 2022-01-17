const Notification = require('../models/Notifications');
const asyncHandler = require("express-async-handler");

const handleError = (err, res) => {
    if (err) {
        res.status(500);
        throw new Error("Server error.");
    }
};
exports.makeNotification = asyncHandler( async (req, res, next) => {
    const { type, title, description } = req.body;
    Notification.create({
        type,
        title,
        description,
    }, function(err, _) {
        if (err) {
            handleError(err, res);
            throw new Error("Problem creating document.");
        };
        res.status(201).json({ message: "Notification created."});
    });
});

exports.markReadNotification = asyncHandler( async (req, res, next) => {
    const id = req.query.id;
    Notification.findByIdAndUpdate(id,{ isRead: true }, { new: true }, (err, notifications) => {
        handleError(err, res);
        res.status(201).json({ success: notifications})
    });
});

exports.getAllNotifications = asyncHandler( async ( req, res, next) => {
    Notification.find( {}, (err, notifications) => {
        handleError(err, res);
        res.status(200).json({ success: notifications});
    });
});

exports.getUnreadNotifications = asyncHandler( async ( req, res, next) => {
    Notification.find({ isRead: false }, ( err, notifications) => {
        handleError(err, res);
        res.status(200).json({ success: notifications})
    })
});