const Experience = require("../models/experience");
const Tag = require("../models/tags");
const { mongo } = require("mongoose");

exports.getExp = async(req, res, next) => {
    const exp = await Experience.find({});
    res.status(200).json({ status: "ok", data: exp })
}

exports.createExp = async(req, res, next) => {
    const { title, images, location, rating, tags } = req.body;


    let newTags = await Tag.convertToObject(tags);
    let exp = await Experience.create({ title, images, location, rating, tags: newTags })
    res.status(200).json({ status: "ok", data: exp })
}

exports.getExpById = async(req, res) => {

    let objId = mongo.Types.ObjectId(req.params.expId);
    let exp = await Experience.findById({ id: objId });
    res.status(200).json({ status: "ok", data: exp })
}