const { body, query, validationResult } = require('express-validator');

exports.validateMakeNotification = [
    body('type').notEmpty().isString(),
    body('title').notEmpty().isString(),
    body('description').notEmpty().isString(),
];

exports.validateMarkReadNotification = [ query('id').notEmpty().isString() ];

exports.validateNotification = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.status(400).json({errors});
        return;
    }
    next();
};