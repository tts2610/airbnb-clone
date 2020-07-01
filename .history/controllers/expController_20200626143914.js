const Experience = require("../models/experience")

exports.getExp = async(req, res, next) => {
    // const user = await User.find({});
    // res.status(200).json({ status: "ok", data: user })
    const exp = await Experience.find({});
    res.status(200).json({ status: "ok", data: exp })
}