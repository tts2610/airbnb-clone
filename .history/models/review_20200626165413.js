const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    comments: {
        type: String,
        required: [true, "comments is required"],
        trim: true
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
        trim: true
    },
    rating: {
        type: Number,
    },
    experienceId: {
        type: mongoose.Schema.ObjectId,
        ref: "Experience",
        required: true,
        trim: true
    }

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

const Review = mongoose.model("Review", schema);
module.exports = Review