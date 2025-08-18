const userModel = require("../models/user.model");

const verifyOTP = async (req, res) => {
    try {
        const {otp} = req?.body
        const {_id} = req?.user
        
        if(!otp || otp === "") throw new Error("OTP is null")
        
        const updateOtp = await userModel.findByIdAndUpdate(_id,{
            verification : true
        })
        if(!updateOtp) throw new Error("OTP Verification Failed")
        return res.status(200).json({
            success : true,
            message : "OTP Verification Successfully"
        })
    } catch (error ) {
        return res.status(200).json({
            success : false,
            message : error.message || "OTP Verification Failed"
        })
    }
};

module.exports = verifyOTP;
