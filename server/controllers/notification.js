const Notification = require('../models/Notifications');
const asyncHandler = require("express-async-handler");

exports.makeNotification = asyncHandler( async ( req, res ) => {
    const { type, title, description } = req.body;
    await Notification.create({
        type,
        title,
        description,
    });
    res.status(201).json({ message: "Notification created."});
});

exports.markReadNotification = asyncHandler( async ( req, res ) => {
    const notification = await Notification.findById(req.query.id);
    notification.isRead = true;
    const readNotification = await notification.save();
    res.status(201).json({ success: readNotification});
});

exports.getAllNotifications = asyncHandler( async ( req, res ) => {
    const notifications = await Notification.find({}).exec();
    res.status(200).json({ success: notifications});
});

exports.getUnreadNotifications = asyncHandler( async ( req, res ) => {
    const notifications = await Notification.find({ isRead: false }).exec();
    res.status(200).json({ success: notifications})
});
