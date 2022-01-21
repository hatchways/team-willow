const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
var cloudinary = require('cloudinary').v2;


router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })

router.get("/", function (req, res) {
    console.log("this is /asset/ path.");
    return res.send("this is /asset/ path.")
})

router.get("/uploadimage", function (req, res) {
        console.log("here");
        return res.send("Got it");
        // cloudinary.uploader
        //     .upload("/home/mananbh9/Pictures/2.png",  {
        //             resource_type: "image",
        //         })
        //     .then((result) => {
        //         console.log("success", JSON.stringify(result, null, 2));
        //         return (res.status(200).json({
        //             "secure_url" : result.secure_url,
        //             "asset_id" : asset_id,
        //         }))
        //     })
        //     .catch((error) => {
        //         console.log("success", JSON.stringify(error, null, 2));
        //     })
    })

module.exports = router
