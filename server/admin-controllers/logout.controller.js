const setCookie = require("../functions/set.cookie")

const adminLogout = async(req,res)=>{
    try {
        res.cookie("ecomv2", "", {
        maxAge: 0,
        httpOnly: true,
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/"
    });
    return res.status(200).json({
            success : true,
            message : "Admin Logged Out Successfully"
        })
    } catch (error) {
        return res.status(403).json({
            success : false,
            message : error.message || "Unexpected Server Error - 505"
        })
    }
}

module.exports = adminLogout