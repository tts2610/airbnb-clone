const jwt = require("jsonwebtoken")
exports.loginRequired = async(req, res, next) => {
    if (!req.headers.authorization) {
        res.statu(401).json({ status: "fail", error: "unauthorized" })
    }
    const token = req.headers.authorization;
    const decoded = jwt.decode(token, process.env.SECRET);
}