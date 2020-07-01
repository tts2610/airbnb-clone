const Experience = require("../models/experience")

exports.getExp = async(req, res, next) => {
    const exp = await Experience.find({});
    res.status(200).json({ status: "ok", data: exp })
}