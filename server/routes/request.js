const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { 
    validateCreateRequest, 
    validateGetRequest, 
    validateEditRequest, 
    validateRequest 
} = require("../middleware/request");

const { getRequests, createRequest, editRequest } = require("../controllers/request");

router.route("/get").get(protect, validateGetRequest, validateRequest, getRequests);
router.route("/create").post(protect, validateCreateRequest, validateRequest, createRequest);
router.route("/edit").put(protect, validateEditRequest, validateRequest, editRequest);

module.exports = router;
