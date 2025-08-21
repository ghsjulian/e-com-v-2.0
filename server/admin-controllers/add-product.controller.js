const productModel = require("../models/product.model");
const deleteImages = require("../functions/delete.images");

const addProduct = async (req, res) => {
        var tempFiles = [];
    try {
        const server = process.env.SERVER_HOST;
        const { product_name, product_info } = req?.body;
        const files = req?.files;

        if (files?.length === 0) throw new Error("Product images are required");
        files.forEach(file =>
            tempFiles.push(`${server}/products/${file.filename}`)
        );
        if (!product_name && !product_info)
            throw new Error("Product name and info is required");

        const newProducts = await new productModel({
            product_name,
            product_info: JSON.parse(product_info),
            product_images: tempFiles
        });
        await newProducts.save();
        return res.status(201).json({
            success: true,
            message: "New product added successfully",
            new_product: newProducts
        });
    } catch (error) {
        await deleteImages(tempFiles);
        return res.status(403).json({
            success: false,
            message: error.message || "Unexpected Server Error"
        });
    }
};

module.exports = addProduct;
