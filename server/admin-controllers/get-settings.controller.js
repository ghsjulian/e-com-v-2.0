const settingsModel = require("../models/settings.model")

const getSettings = async(req,res)=>{
    try {
        const settings = await settingsModel.find()
        return res.status(200).json(settings[0])
    } catch (error) {
        return res.status(403).json({
            success:false,
            message : error.message || "Unexpected Server Error - 505"
        })
    }
}

module.exports = getSettings