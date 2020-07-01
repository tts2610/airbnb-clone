const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    comments: {
        type: String,
        required: [true, "comments is required"],
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
    tags: [{
        type: mongoose.Schema.ObjectId,
        ref: "Tag",
        required: true
    }]

}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

schema.methods.toJSON = function() {
    const obj = this.toObject();
    delete obj.id;
    return obj
}

const Experience = mongoose.model("Experience", schema);
module.exports = Experience