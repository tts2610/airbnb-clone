const Experience = require("../models/experience");
const Tag = require("../models/tags");
const mongoose = require("mongoose")

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
    try {
        let exp = await Experience.findById(req.params.expId);
        if (exp)
            res.status(200).json({ status: "ok", data: exp });
    } catch (error) {
        res.status(500).json({ status: "failed", data: "Experience not found!" })
    }


}