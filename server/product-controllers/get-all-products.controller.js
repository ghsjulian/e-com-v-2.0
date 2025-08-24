const productModel = require("../models/product.model")

const getAllProducts = async (req,res)=>{
    try {
        const products = await productModel.find()
        if (!products || products?.length === 0) throw new Error("No products found in the server")
        return res.status(200).json(products)
    } catch (error) {
        return res.status(403).json({
            success : false,
            message : error.message || "Unexpected Server Error - 505"
        })
    }
}

module.exports = getAllProducts