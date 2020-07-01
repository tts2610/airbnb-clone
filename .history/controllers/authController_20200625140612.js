const User = require("../models/users");

exports.loginWithEmail = async(req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(400).json({ status: "fail", error: "email and password are required" })
    const user = await User.loginWithEmail
}