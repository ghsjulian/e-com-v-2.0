const userModel = require("../models/user.model")
const {createHash} = require("../functions/password.hash")

const resetPassword = async(req,res)=>{
    try {
        const {email, newPassword} = req?.body 
        if(!email && !newPassword) throw new Error("Email And New Password Required")
        const user = await userModel.findOne({email})
        if(!user || !user?._id) throw new Error("User Doesn't Exist")
        
        const hash = await createHash(newPassword)
        const update = await userModel.findByIdAndUpdate(user?._id,{
            password : hash
        })
        if(!update) throw new Error("Password Rest Failed")
        return res.status(200).json({
            success:true,
            message: "Password Reset Successfully"
        })
    } catch (error) {
        return res.status(403).json({
            success:false,
            message: error.message || "Unexpected Server Error - 505"
        })
    }
}

module.exports = resetPassword