// const Experience = require("../models/experience");
// const Tag = require("../models/tags");

const Review = require("../models/review")

// exports.getExp = async(req, res, next) => {
//     const exp = await Experience.find({});
//     res.status(200).json({ status: "ok", data: exp })
// }

// exports.createExp = async(req, res, next) => {
//     const { title, images, location, rating, tags } = req.body;


//     let newTags = await Tag.convertToObject(tags);
//     let exp = await Experience.create({ title, images, location, rating, tags: newTags })
//     res.status(200).json({ status: "ok", data: exp })
// }

exports.getReviews = async(req, res, next) => {
    const reviews = await Review.find({});
    if (reviews)
        res.status(200).json({ status: "ok", data: reviews })
}

exports.postReviews = async(req, res, next) => {
    const { comments, rating } = req.body;

    let review = await Review.create({ comments: comments, userId: req.user, rating: rating })
    res.status(200).json({ status: "post successfully", data: review })
}