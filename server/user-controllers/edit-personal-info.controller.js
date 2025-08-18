const userModel = require("../models/user.model")

const updatePersonalInfo = async (req,res) =>{
    try {
        const {name,email,avatar} = req?.body 
        if(!name && !email) throw new Error("All Feilds Are Rrquired")
        const user = await userModel.findByIdAndUpdate(req?.user?._id,req?.body)
        if(!user) throw new Error("Failed to update personal info")
        const updatedUser = await userModel.findById(req?.user?._id).select("-password")
        return res.status(200).json(updatedUser)
    } catch (error) {
        return res.status(403).json({
            success:false,
            message : error.message || "Unexpected Server Error - 505"
        })
    }
}

module.exports = updatePersonalInfo