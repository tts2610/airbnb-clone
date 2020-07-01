const jwt = require("jsonwebtoken");
const User = require("../models/users");
exports.loginRequired = async(req, res, next) => {
    if (!req.headers.authorization) {
        res.status(401).json({ status: "fail", error: "unauthorized" })
    }
    const token = req.headers.authorization.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.SECRET);
    console.log(decoded)
    const user = await User.findById(decoded);
    if (!user) {
        res.status(401).json({ status: "fail", error: "unauthorized" })
    }
    req.user = user
    next();
}