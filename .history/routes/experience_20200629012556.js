var express = require("express");
const { getExp, createExp, getExpById, updateExp } = require("../controllers/expController");
const { isHost, loginRequired } = require("../middleware/auth");
var router = express.Router();

router.route("/").get(getExp).post(loginRequired, isHost, createExp).put(loginRequired, isHost, updateExp);
router.route("/:expId").get(getExpById);

module.exports = router;