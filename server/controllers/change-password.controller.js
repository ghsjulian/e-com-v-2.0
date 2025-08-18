const userModel = require("../models/user.model");
const { createHash,compareHashed } = require("../functions/password.hash");

const changePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword } = req?.body;
        if (!newPassword || newPassword === "")
            throw new Error("New Password Required");
        
        const user = await userModel.findById(req?.user?._id)
        const isMatched = await compareHashed(oldPassword,user?.password)
        
        if(!isMatched) throw new Error("Incorrect Old Password")
        
        const hash = await createHash(newPassword);
        const update = await userModel.findByIdAndUpdate(user?._id, {
            password: hash
        });
        if (!update) throw new Error("Password Changed Failed");
        return res.status(200).json({
            success: true,
            message: "Password Changed Successfully"
        });
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: error.message || "Unexpected Server Error - 505"
        });
    }
};

module.exports = changePassword;
