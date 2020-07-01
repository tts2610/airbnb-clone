var express = require('express');
const { createUser, getUser } = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    getUser()
});

router.route("/").post(createUser);
module.exports = router;