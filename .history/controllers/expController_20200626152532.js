const Experience = require("../models/experience");
const Tag = require("../models/tags");

exports.getExp = async(req, res, next) => {
    const exp = await Experience.find({});
    res.status(200).json({ status: "ok", data: exp })
}

exports.createExp = async(req, res, next) => {
    const { title, images, location, rating, tags } = req.body;


    let tags = await Tag.convertToObject(tags);
    let exp = await Experience.create({ title, images, location, rating, tags })
    res.status(200).json({ status: "ok", data: exp })


}