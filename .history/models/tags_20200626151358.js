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
    arr.map(async e => {
        let tag = await Tag.findOne({ title: e.toLowerCase() })
        if (tag) return tag;
        else {
            let tag = await Tag.create({ title: e })
            return tag
        }
    })

    console.log(arr)

    let result = await Promise.all(arr);
    return result;
}


const Tag = mongoose.model("Tag", schema);
module.exports = Tag