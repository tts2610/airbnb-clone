const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
    },
    images: {
        type: Array,
        required: [true, "Images are required"],
        trim: true,
    },
    location: {
        type: String,
        required: [true, "Location is required"],
    },
    averageRating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    tags: [{
        type: mongoose.Schema.ObjectId,
        ref: "Tag",
        required: true,
    }, ],
    userId: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

schema.methods.toJSON = function() {
    const obj = this.toObject();
    delete obj.id;
    return obj;
};

const Experience = mongoose.model("Experience", schema);
module.exports = Experience;