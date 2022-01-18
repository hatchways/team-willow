const { body, query, validationResult } = require('express-validator');

exports.validateCreateRequest = [
    body('userId').notEmpty().isString(),
    body('sitterId').notEmpty().isString(),
    body('date').notEmpty().isString(),
    body('start').notEmpty().isString(),
    body('end').notEmpty().isString(),
];

exports.validateGetRequest = [ query('userId').notEmpty().isString() ];

exports.validateEditRequest = [
    ...this.validateCreateRequest,
    body('accepted').notEmpty().isBoolean(),
    body('declined').notEmpty().isBoolean()
];

exports.validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors});
    }
    next();
}
