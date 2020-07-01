var express = require("express");
const { postReviews } = require("../controllers/viewController");
const { loginRequired, isHost } = require("../middleware/auth");
var router = express.Router();

router.route("/").post(loginRequired, postReviews);

module.exports = router;