var express = require("express")
const { getExp, createExp, getExpById } = require("../controllers/expController");
var router = express.Router();



router.route("/").get(getExp).post(createExp);
router.route("/:expId").get(getExpById);



module.exports = router