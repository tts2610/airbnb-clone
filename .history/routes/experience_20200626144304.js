var express = require("express")
const { getExp } = require("../controllers/expController");

var router = express.Router();
router.route("/").get(getExp);