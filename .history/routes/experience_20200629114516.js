var express = require("express");
const { getExp, createExp, getExpById, updateExp, deleteExperience, updateExperience } = require("../controllers/expController");
const { isHost, loginRequired } = require("../middleware/auth");
var router = express.Router();

router.route("/").get(getExp).post(loginRequired, isHost, createExp).put(loginRequired, isHost, updateExp);
router.route("/:expId").get(getExpById).delete(loginRequired, isHost, deleteExperience).patch(loginRequired, updateExperience);

module.exports = router;