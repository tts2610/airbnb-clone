const User = require("../models/users");

exports.loginWithEmail = async(req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(400).json({ status: "fail", error: "email and password are required" })
    const user = await User.loginWithEmail(email, password);
    if (!user) {
        return res.status(400).json({ status: "fail", error: "email or password are incorrect" })
    }
    return res.status({ status: "success", message: "login successfully" })
}