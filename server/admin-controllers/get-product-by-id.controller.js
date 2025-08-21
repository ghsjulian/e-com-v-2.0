const productModel = require("../models/product.model")

const getProductById = async (req,res) =>{
    try {
        const {product_id} = req?.params
        if(!product_id || product_id === null) throw new Error("Product id is undefined")
        const product = await productModel.findById(product_id)
        if(!product || product === null) throw new Error("Product Not Found In the Server")
        return res.status(200).json(product) 
    } catch (error) {
        return res.status(200).json({
            success : false,
            message : error.message || "Unexpected Server Error - 505",
        })
    }
}

module.exports = getProductById