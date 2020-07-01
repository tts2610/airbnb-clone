var express = require('express');
const { createUser, getUser, getMyProfile } = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     getUser()
// });

router.route("/").get(getUser).post(createUser);

router.route("/me").get(getMyProfile)

module.exports = router;