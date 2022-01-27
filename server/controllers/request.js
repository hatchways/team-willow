const Request = require('../models/Request');
const asyncHandler = require("express-async-handler");

exports.getRequests = asyncHandler(async (req, res) => {
    const userId = req.query.userId;
    const requests = await Request.find({userId}).exec();
    res.status(200).json({requests});
});

exports.createRequest = asyncHandler(async (req, res) => {
    const { userId, sitterId, date, start, end } = req.body;
    await Request.create({
        userId,
        sitterId,
        date,
        start,
        end,
    })
    res.status(201).json({ message: "Request created."});
});

exports.editRequest = asyncHandler(async (req, res) => {
    const { userId, sitterId, date, start, end, accepted, declined } = req.body;
    const request = await Request.findOne({userId, sitterId, date, start, end}).exec();
    request.accepted = accepted;
    request.declined = declined;
    const updatedRequest = await request.save();
    res.status(200).json({ updatedRequest });
});