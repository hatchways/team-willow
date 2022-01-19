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

router.route("/make").post(protect, validateMakeNotification, validateNotification, makeNotification);
router.route("/mark-read").put(protect, validateMarkReadNotification, validateNotification, markReadNotification);
router.route("/get-all").get(protect, getAllNotifications);
router.route("/get-unread").get(protect, getUnreadNotifications);

module.exports = router;
