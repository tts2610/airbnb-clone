exports.loginRequired = async(req, res, next) => {
    if (!req.headers.authorization) {
        res.statu(401).json({ status: "fail", error: "unauthorized" })
    }
}