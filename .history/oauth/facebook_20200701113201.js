const passportFacebook = require("passport-facebook");
const Strategy = passportFacebook.Strategy;
require("dotenv").config(".env");

module.exports = new Strategy({
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL,
        profileFields: ["id", "email", "name"],
    },
    // verification function (callback)
    function(accessToken, refreshToken, profile, next) {
        console.log(profile);
        next(null, profile);
    }
);