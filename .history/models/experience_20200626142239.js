const mongo = require("mongoose")

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true
    },
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    tokens: [String],
    type: {
        type: String,
        enum: ["normal", "host"],
        required: [true, "Type is required"],
        default: "normal"
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})