var express = require("express");
const { postReviews } = require("../controllers/viewController");
var router = express.Router();

router.route("/").post(postReviews)