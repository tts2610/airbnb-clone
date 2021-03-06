const User = require("../models/users");

exports.createUser = async(req, res, next) => {


    try {
        const { email, name, password } = req.body;
        const user = await User.create({ email, name, password })
        res.status(201).json({ status: "ok", data: user })
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message })
    }
}

exports.getUser = (req, res, next) => {
    const user = await User.find({});
    res.status(200).json({ status: "ok", data: user })
}