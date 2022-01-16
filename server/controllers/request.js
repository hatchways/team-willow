const Request = require('../models/Request');
const asyncHandler = require("express-async-handler");

exports.getRequests = asyncHandler(async (req, res ) => {
    const userId = req.query.userId;
    Request.find({ userId })
    .exec(function(err, requests) {
        if (err) {
            res.status(500);
            throw new Error('Problem finding document.')};
        if (!requests) {
            res.status(404);
            throw new Error("No request for user exists.");
        }
        res.status(200).json({requests});
    });
});

exports.createRequest = asyncHandler( (req, res ) => {
    const { userId, sitterId, date, start, end } = req.body;
    Request.create({
        userId,
        sitterId,
        date,
        start,
        end,
    }, function(err, _) {
        if (err) {
            res.status(500);
            throw new Error("Problem creating document.");
        };
        res.status(201).json({ message: "Request created."});
    });
});

exports.editRequest = asyncHandler( async ( req, res ) => {
    const { userId, sitterId, date, start, end, accepted, declined } = req.body;
    
    const request = await Request.findOne({userId, sitterId, date, start, end}).exec();
    if (!request) {
        res.status(404);
        throw new Error('Request not found.');
    }
    request.accepted = accepted;
    request.declined = declined;
    await request.save().then( savedRequest => {
        res.status(200).json({ savedRequest });
    });
});