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

// FACEBOOK
exports.loginFacebook = passport.authenticate("facebook", { scope: ["email"] });

exports.facebookAuthHandler = function(req, res, next) {
    passport.authenticate("facebook", async function(err, profile) {
        const { email, last_name, first_name } = profile._json;

        const user = await User.findOneOr(email, first_name + " " + last_name);
        const token = await user.generateToken();

        return res.json({ profile });
    })(req, res, next);
};