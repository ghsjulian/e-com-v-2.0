const deleteImages = require("../functions/delete.images")
const productModel = require("../models/product.model")

const deleteProduct = async(req,res)=>{
    try {
        const {product_id} = req?.params
        if(!product_id) throw new Error("Product ID is undefined")
        const isProduct = await productModel.findById(product_id)
        if(!isProduct) throw new Error("Product not found in the server")
        await deleteImages(isProduct?.product_images)
        const deleteStatus = await productModel.findByIdAndDelete(product_id)
        if(!deleteStatus) throw new Error("Product Deleted Failed")
        return res.status(200).json({
            success : true,
            message : "Product deleted successfully"
        })
    } catch (error) {
        return res.status(403).json({
            success : false,
            message : error.message || "Unexpected Server Error"
        })
    }
}

module.exports = deleteProduct