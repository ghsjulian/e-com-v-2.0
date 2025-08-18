const { decodeJWT } = require("../functions/jwt.config");
const userModel = require("../models/user.model");

const isAdmin = async (req, res, next) => {
    try {
        const cookie = req?.cookies?.ecomv2;
        if (!cookie || cookie === null) throw new Error("No Cookie Found");
        const data = decodeJWT(cookie);
        if (!data || !data?._id)
            throw new Error("Unauthorized Cookie And Token");
        const user = await userModel.findById(data?._id);
        if (user && user?.role === "ADMIN") {
            req.user = data;
            next();
        } else {
            throw new Error("Unauthorized User");
        }
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: error.message || "Unexpected Server Error - 505"
        });
    }
};

module.exports = isAdmin;
