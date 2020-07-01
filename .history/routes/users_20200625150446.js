var express = require('express');
const { createUser, getUser, getMyProfile } = require('../controllers/userController');
const { loginRequired } = require('../middleware/auth');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     getUser()
// });

router.route("/").get(getUser).post(createUser);

router.route("/me").get(loginRequired, getMyProfile)

module.exports = router;