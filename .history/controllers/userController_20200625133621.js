const User = require("../models/users");

exports.createUser = async(req, res, next) => {


    try {
        // res.send("just created new user")
        const { email, name, password } = req.body;
        // if (!email || !name || !password){
        //     return res.status(400).json({
        //         status: "fail",
        //         error: "email"
        //     })
        // }

        const user = await User.create({ email, name, password })
        res.status(201).json({ status: "ok", data: user })
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message })
    }
}