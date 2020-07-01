var express = require("express");
const { loginWithEmail, loginFacebook, facebookAuthHandler } = require("../controllers/authController");
var router = express.Router();

router.route("/login").post(loginWithEmail);

router.route("/facebook/login").get(loginFacebook);
router.route("/facebook/authorized").get(facebookAuthHandler);

module.exports = router;