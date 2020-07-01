const User = require("../models/users");
const passport = require("../oauth/index");

exports.loginWithEmail = async(req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ status: "fail", error: "email and password are required" });
    const user = await User.loginWithEmail(email, password);
    if (!user) {
        return res.status(400).json({ status: "fail", error: "email or password are incorrect" });
    }

    const token = await user.generateToken();
    res.status(200).json({ status: "success", data: { user, token } });
};

exports.loginFacebook = passport.authenticate("facebook");

exports.facebookAuthHandler = async(req, res, next) => {};