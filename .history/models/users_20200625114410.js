const mongoose = require('mongoose');
const validator = require("validator")
const bcrypt = require("bcrypt")

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        }
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
    tokens: [String]
})

schema.pre("save", async function(next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, round)
    }
    next();
})

const User = mongoose.model("User", schema)

module.exports = User