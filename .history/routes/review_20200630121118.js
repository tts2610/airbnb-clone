var express = require("express");
const { postReviews } = require("../controllers/viewController");
const { loginRequired } = require("../middleware/auth");
var router = express.Router();

router.route("/:experienceId").post(loginRequired, postReviews);

module.exports = router;