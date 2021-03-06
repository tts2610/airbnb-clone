var express = require("express")
const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true
    },
    images: {
        type: Array,
        required: [true, "Images are required"],
        trim: true
    },
    location: {
        type: String,
        required: [true, "Location is required"]
    },
    rating: {
        type: Number,
    },
    tags: {
        type: mongoose.Types.ObjectId,
        required: [true, "Tag is required"]
    }

}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

const Experience = mongoose.model("Experience", schema);
module.exports = Experience