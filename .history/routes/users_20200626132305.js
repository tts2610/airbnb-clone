var express = require('express');
const { getUser, getMyProfile, createUser } = require('../controllers/userController');
const { loginRequired } = require('../middleware/auth');
var router = express.Router();

/* GET users listing. */
// router.get('/', loginRequired, function(req, res, next) {
//     getMyProfile()
// });

router.route("/").post(createUser);

router.route("/me").get(loginRequired, getMyProfile)

module.exports = router;