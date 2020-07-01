const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true
    },

}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})


schema.statics.convertToObject = async function(arr) {
    console.log("converting")
    arr.map(async e => {
        let tag = await Tag.findOne({ title: e.toLowerCase() })
        if (tag) return tag;
        else return Tag.create({ title: e })
    })

    let result = Promise.all(arr);
    return result;
}


const Tag = mongoose.model("Tag", schema);
module.exports = Tag