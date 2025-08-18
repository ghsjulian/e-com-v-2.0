const userModel = require("../models/user.model");


const userLogoutController = async (req, res) => {
    try {
        res.cookie("authapp", "", {
        maxAge: 0,
    });
        return res.status(200).json({
            success: true,
            message: "User Log Out Successfully"
        });
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: error.message || "Unexpected Server Error - 505"
        });
    }
};

module.exports = userLogoutController;
