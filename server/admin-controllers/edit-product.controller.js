const productModel = require("../models/product.model");
const deleteImages = require("../functions/delete.images")


const editProduct = async (req, res) => {
    var tempFiles = []
    var tempDelete = []
    try {
        const server = process.env.SERVER_HOST;
        const { product_id } = req?.params;
        const { product_name, product_info, images } = req?.body;
        const files = req?.files;
        const oldImg = JSON.parse(images);

        if (!product_id || product_id === "")
            throw new Error("Product id is undefined");
        if (!product_name || product_name === "")
            throw new Error("Product Name is undefined");
        if (!product_info || product_info === "")
            throw new Error("Product info is undefined");
        if (!files || files?.length === 0)
            throw new Error("Product images not found");

        const product = await productModel.findById(product_id);
        if (!product) throw new Error("No product found in the server");
        
        product?.product_images.forEach(async(img,idx)=>{
            if(oldImg[idx] !== img){
                tempFiles.push(img)
            }
            
        })
        files.forEach(file =>{
            tempFiles.push(`${server}/products/${file.filename}`)
            tempDelete.push(`${server}/products/${file.filename}`)
        });
        await productModel.findByIdAndUpdate(product_id,{
            product_images : tempFiles,
            product_name : product_name?product_name:product?.product_name,
            product_info : product_info?product_info:product?.product_info,
        })
        await deleteImages(oldImg)
        return res.status(200).json({
            success: true,
            message: "Product Edited Successfully",
            product 
        });
    } catch (error) {
        await deleteImages(tempDelete)
        return res.status(403).json({
            success: false,
            message: error.message || "Unexpected Error - 505"
        });
    }
};
module.exports = editProduct;
