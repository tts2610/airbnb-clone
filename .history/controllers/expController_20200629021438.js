const Experience = require("../models/experience");
const Tag = require("../models/tags");
const mongoose = require("mongoose");

exports.getExp = async(req, res, next) => {
    const exp = await Experience.find({});
    res.status(200).json({ status: "ok", data: exp });
};

exports.createExp = async(req, res, next) => {
    const { title, images, location, rating, tags } = req.body;
    const user = req.user;

    let newTags = await Tag.convertToObject(tags);
    let exp = await Experience.create({ title, images, location, rating, tags: newTags, userId: user._id });
    res.status(200).json({ status: "ok", data: exp });
};

exports.getExpById = async(req, res) => {
    try {
        let exp = await Experience.findById(req.params.expId);
        if (exp) res.status(200).json({ status: "ok", data: exp });
    } catch (error) {
        res.status(500).json({ status: "failed", data: "Experience not found!" });
    }
};

exports.updateExp = async(req, res, next) => {
    const { id, title, images, location, rating, tags } = req.body;
    const user = req.user;
    console.log(user._id);
    if (!id) {
        res.status(500).json({ status: "error", data: "missing id" });
    }
    let exp = await Experience.findById(id);
    console.log(exp.userId);
    if (!exp) {
        res.status(500).json({ status: "failed", data: "Experience not found!" });
    }
    if (exp.userId !== user._id) {
        res.status(500).json({ status: "error", data: "Unauthorized!" });
    } else {
        let newTags = await Tag.convertToObject(tags);
        let exp = await Experience.findByIdAndUpdate({ id }, { title, images, location, rating, tags: newTags });
        res.status(200).json({ status: "exp updated", data: exp });
    }
};