const userModel = require("../models/user.model");

const getUserController = async (req, res) => {
    try {
        const user = await userModel.findById(req?.user?._id).select("-password");
        if (!user) throw new Error("No User Found In The Server");
        return res.json(user);
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: error.message || "Unexpected Server Error - 505"
        });
    }
};

module.exports = getUserController;
