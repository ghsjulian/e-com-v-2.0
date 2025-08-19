const productModel = require("../models/product.model");

const addProduct = async (req, res) => {
    try {
        const server = process.env.SERVER_HOST;
        const { product_name, product_info } = req?.body;
        const files = req?.files;

        console.log(JSON.parse(product_info));

        let tempFiles = [];
        if (!product_name && !product_info)
            throw new Error("Product name and info is required");
        if (files?.length === 0) throw new Error("Product images are required");

        files.forEach(file =>
            tempFiles.push(`${server}/products/${file.filename}`)
        );
        const newProducts = await new productModel({
            product_name,
            product_info: JSON.parse(product_info),
            product_images: tempFiles
        });
        return res.json({ newProducts });
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: error.message || "Unexpected Server Error"
        });
    }
};

module.exports = addProduct;
