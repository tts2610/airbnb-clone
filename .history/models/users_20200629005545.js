const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const round = 10;
const jwt = require("jsonwebtoken");

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid");
            }
        },
    },
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    userType: {
        type: Number,
        required: [true, "Type is required"],
        // enum: ["normal", "host"],

        // default: "normal",
    },
    tokens: [String],
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

//const user  = new User({})
// user.toJSON (call by instance)
schema.methods.toJSON = function() {
    const obj = this.toObject();
    delete obj.password;
    delete obj.tokens;
    delete obj.id;
    return obj;
};

schema.methods.generateToken = async function() {
    const token = jwt.sign({
            _id: this._id,
        },
        process.env.SECRET, { expiresIn: "7d" }
    );
    this.tokens.push(token);
    await this.save();
    return token;
};

schema.statics.loginWithEmail = async function(email, password) {
    const user = await User.findOne({ email: email });
    if (!user) return null;
    console.log(user);
    const match = await bcrypt.compare(password, user.password);
    if (match) return user;
    return null;
};

schema.pre("save", async function(next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, round);
    }
    next();
});

const User = mongoose.model("User", schema);

module.exports = User;