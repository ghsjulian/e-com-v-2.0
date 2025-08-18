const userModel = require("../models/user.model");
const { createHash } = require("../functions/password.hash");
const { encodeJWT } = require("../functions/jwt.config");
const setCookie = require("../functions/set.cookie");
const sendMail = require("../configs/mailer.config")


const signupController = async (req, res) => {
    try {
        
        const { name, email, password } = req.body;
        if (!name && !email && !password)
            throw new Error("All fields are required");
        const existUser = await userModel.findOne({ email: email.trim() });
        if (existUser) throw new Error("User Already Registered");
        const hash = await createHash(password.trim());
        const newUser = await new userModel({
            name,
            email,
            avatar: "/images/avatar.png",
            password: hash
        });
        const token = encodeJWT({ _id: newUser._id, name, email });
        setCookie(res, token);
        await newUser.save();
        let otp = Math.floor(Math.random() * (900000 - 100000)) + 100000;
        await sendMail(name,email,otp)
        const user = await userModel.findOne({ email }).select("-password");
        return res.status(201).json({
            success: true,
            token,
            user,
            message: "User Created Successfully"
        });
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: error.message || "Server Error - 403"
        });
    }
};

module.exports = signupController;
