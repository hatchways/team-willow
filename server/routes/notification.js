const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');

const {
    validateMakeNotification, 
    validateMarkReadNotification,
    validateNotification,
} = require('../middleware/notification');

const { 
    makeNotification, 
    markReadNotification, 
    getAllNotifications, 
    getUnreadNotifications 
} = require('../controllers/notification'); 

router.route("/")
    .all(protect)
    .get(getAllNotifications)
    .post(validateMakeNotification, validateNotification, makeNotification);
router.route("/read")
    .all(protect)
    .put(validateMarkReadNotification, validateNotification, markReadNotification);
router.route("/unread")
    .all(protect)
    .get(getUnreadNotifications);

module.exports = router;
