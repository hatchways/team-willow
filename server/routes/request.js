const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { getRequests, createRequest, editRequest } = require("../controllers/request");

router.route("/get").get(protect, getRequests);

router.route("/create").post(protect, createRequest);

router.route("/edit").put(protect, editRequest);

module.exports = router;
