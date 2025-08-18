const userModel = require("../models/user.model")

const updateProfilePic = async(req,res) =>{
    try {
        const {base64Img} = req?.body 
        if(!base64Img || base64Img==="") throw new Error("Please select an image file")
        const user = await userModel.findByIdAndUpdate(req?.user?._id,{avatar:base64Img})
        if(!user) throw new Error("Failed to upload profile pic")
        return res.status(200).json(await userModel.findById(req?.user?._id).select("-password"))
    } catch (error) {
        return res.status(403).json({
            success:false,
            message : error.message || "Unexpected Server Error - 505"
        })
    }
}

module.exports = updateProfilePic