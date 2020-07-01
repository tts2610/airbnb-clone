var express = require('express');
const { createUser } = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.route("/").post(createUser);
module.exports = router;