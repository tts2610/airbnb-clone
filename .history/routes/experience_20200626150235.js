var express = require("express")
const { getExp, createExp } = require("../controllers/expController");
var router = express.Router();



router.route("/").get(getExp).post(createExp);

module.exports = router