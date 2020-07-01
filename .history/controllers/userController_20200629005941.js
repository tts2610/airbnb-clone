const User = require("../models/users");

exports.createUser = async(req, res, next) => {
    try {
        const { email, name, password, type } = req.body;
        const user = await User.create({ email, name, password });
        res.status(201).json({ status: "ok", data: user });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
};

// exports.getUser = async(req, res, next) => {
//     const user = await User.find({});
//     res.status(200).json({ status: "ok", data: user })
// }

exports.getMyProfile = async(req, res) => {
    res.status(200).json({ status: "here your profile", data: req.user });
};