var express = require("express");
const { getExp, createExp, getExpById } = require("../controllers/expController");
const { isHost } = require("../middleware/auth");
var router = express.Router();

router.route("/").get(getExp).post(isHost, createExp);
router.route("/:expId").get(getExpById);

module.exports = router;