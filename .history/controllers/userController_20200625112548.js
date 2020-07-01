const User = require("../models/users");

exports.createUser = async(req, res, next) => {
    // res.send("just created new user")
    const { email, name, password } = req.body;
    // if (!email || !name || !password){
    //     return res.status(400).json({
    //         status: "fail",
    //         error: "email"
    //     })
    // }

    const user = await User.create({ email, name, password })
    res.status(201).json({})
}