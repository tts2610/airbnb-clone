const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    comments: {
        type: String,
        required: [true, "comments is required"],
        trim: true,
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
        trim: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    experienceId: {
        type: mongoose.Schema.ObjectId,
        ref: "Experience",
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

schema.pre("save", async function() {
    // 'this' === review doc
    // 'this.constructor === Review model
    await this.constructor.calculateAverage(this.experienceId);
});

schema.statics.calculateAverage = async function(eid) {
    console.log("kkkk", eid);
    // 'this' refers to Review model
    const stats = await this.aggregate([{
            $match: { experienceId: eid },
        },
        {
            $group: {
                _id: "$experienceId",
                nRating: 1,
                // avgRating: { $avg: "$rating" },
            },
        },
    ]);

    console.log(stats);
};

const Review = mongoose.model("Review", schema);
module.exports = Review;