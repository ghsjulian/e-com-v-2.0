const productModel = require("../models/product.model")
const userModel = require("../models/user.model")
const orderModel = require("../models/order.model") 

const setOrder = async(req,res)=>{
    try {
        const {} = req?.body
    } catch (error) {
        return res.status(403).json({
            success : false,
            message : error.message || "Unexpected Server Error"
        })
    }
}

module.exports = setOrder