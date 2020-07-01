const Experience = require("../models/experience");
const Tag = require("../models/tags");

exports.getExp = async(req, res, next) => {
    const exp = await Experience.find({});
    res.status(200).json({ status: "ok", data: exp })
}

exports.createExp = async(req, res, next) => {
    const { title, images, location, rating, tags } = [...req.body];


    let tags = Tag.convertToObject(tags);
    console.log(tags)

    // Experience.create({title,images,location,rating,tags})
}