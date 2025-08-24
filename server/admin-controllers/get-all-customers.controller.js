const userModel = require("../models/user.model")

const getAllCustomers = async (req,res)=>{
    try {
        const customers = await userModel.find().select("-password")
        if (!customers || customers?.length === 0) throw new Error("No customer found in the server")
        return res.status(200).json(customers)
    } catch (error) {
        return res.status(403).json([])
    }
}

module.exports = getAllCustomers