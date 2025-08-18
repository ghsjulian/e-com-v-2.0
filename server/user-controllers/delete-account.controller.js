const userModel = require("../models/user.model");

const userDeleteController = async (req, res) => {
    try {
        const isDeleted = await userModel.findByIdAndDelete(req?.user?._id)
        if(!isDeleted) throw new Error("Failed to delete account")
        res.cookie("authapp", "", {
            maxAge: 0
        });
        return res.status(200).json({
            success: true,
            message: "Account Deleted Successfully"
        });
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: error.message || "Unexpected Server Error - 505"
        });
    }
};

module.exports = userDeleteController;
