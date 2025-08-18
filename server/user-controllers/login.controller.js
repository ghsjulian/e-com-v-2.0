const userModel = require("../models/user.model");
const { compareHashed } = require("../functions/password.hash");
const { encodeJWT } = require("../functions/jwt.config");
const setCookie = require("../functions/set.cookie");

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email && !password) throw new Error("All fields are required");

        const existUser = await userModel.findOne({ email: email.trim() });
        if (!existUser) throw new Error("Invalid User Credentials");
        if (existUser.email !== email)
            throw new Error("Invalid Email Or Password");
            
        const isMatched = await compareHashed(password, existUser?.password);
        if (!isMatched) throw new Error("Invalid Email Address Or Password");
        
        if (existUser?.role !== "USER") throw new Error("Invalid User")
        
        const token = encodeJWT({
            _id: existUser._id,
            name: existUser.name,
            email
        });
        setCookie(res, token);
        const user = await userModel.findOne({ email }).select("-password");
        return res.status(200).json({
            success: true,
            token,
            user,
            message: "User Logged In Successfully"
        });
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: error.message || "Server Error - 403"
        });
    }
};

module.exports = loginController;
