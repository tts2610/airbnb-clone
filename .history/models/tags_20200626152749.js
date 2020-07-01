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

schema.methods.toJSON = function() {
    const obj = this.toObject();
    delete obj.id;
    return obj
}


schema.statics.convertToObject = async function(arr) {
    let mappedArr = arr.map(async e => {
        let tag = await Tag.findOne({ title: e.toLowerCase() })
        if (tag) return tag;
        else {
            let tag = await Tag.create({ title: e })
            return tag
        }
    })

    let result = await Promise.all(mappedArr);
    return result;
}


const Tag = mongoose.model("Tag", schema);
module.exports = Tag