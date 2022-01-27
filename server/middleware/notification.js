const { body, query, custom, validationResult } = require('express-validator');
const { ENUM_NOTIFICATIONS } = require('../models/Notifications');

const checkType = (value) => {
    const type = ENUM_NOTIFICATIONS.find( type => type === value);
    if (!type) {
        throw new Error(`Not a valid notification Type. Must be (Case Sensitive): ${ENUM_NOTIFICATIONS.join(', ')}`);
    }
    return type;
}
exports.validateMakeNotification = [
    body('type').notEmpty().bail().isString().custom(checkType),
    body('title').notEmpty().bail().isString(),
    body('description').notEmpty().bail().isString(),
    body('metaData').notEmpty().bail().isObject(),
];

exports.validateMarkReadNotification = [ query('id').notEmpty().isString() ];

exports.validateNotification = (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors)
    if(!errors.isEmpty()) {
        res.status(400).json({errors});
        return;
    }
    next();
};