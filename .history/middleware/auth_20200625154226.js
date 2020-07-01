const jwt = require("jsonwebtoken");
const User = require("../models/users");
exports.loginRequired = async(req, res, next) => {
    if (!req.headers.authorization) {
        res.statu(401).json({ status: "fail", error: "unauthorized" })
    }
    const token = req.headers.authorization.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.SECRET);
    const user = await User.findById(decoded);
    if (!user) {
        res.statu(401).json({ status: "fail", error: "unauthorized" })
    }

    req.user = user
    next()
}