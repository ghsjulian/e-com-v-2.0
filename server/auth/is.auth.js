const { decodeJWT } = require("../functions/jwt.config");

const isAuth = async (req, res, next) => {
    try {
        const cookie = req?.cookies?.ecomv2;
        if(!cookie || cookie === null) throw new Error("No Cookie Found")
        const data = decodeJWT(cookie)
        if(!data || !data?._id) throw new Error("Unauthorized Cookie And Token")
        req.user = data
        next()
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: error.message || "Unexpected Server Error - 505"
        });
    }
};

module.exports = isAuth;
