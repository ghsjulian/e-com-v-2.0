const userModel = require("../models/user.model")
const sendMail = require("../configs/mailer.config")

const senOTP = async(req,res)=>{
    try {
        const {email} = req?.body
        if(email === "") throw new Error("Please Enter Email Address")
        const isUser = await userModel.findOne({email})    
        if(!isUser || !isUser?._id) throw new Error("User Doesn't Exist In The Server")
        let otp = Math.floor(Math.random() * (900000 - 100000)) + 100000;
        /* OTP Will be sent through the email address
        / TODO : the otp will be sent to the 
        / user email address and then , we will
        / verify the otp , we will send the otp 
        / for testing here with the api response
        */
        await sendMail(isUser?.name,email,otp)
        return res.status(200).json({
            success: true,
            otp : otp,
            message : "OTP Has Been Sent To Your Email (But We Haven't Added Email Configuration Yet"
        })
    } catch (error) {
        return res.status(403).json({
            success:false,
            message : error.message || "Unexpected Server Error - 505"
        })
    }
}

module.exports = senOTP