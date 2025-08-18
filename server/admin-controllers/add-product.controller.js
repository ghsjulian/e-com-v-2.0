const productModel = require("../models/product.model");

const addProduct = async (req, res) => {
    try {
        console.log(req.files)
        return res.json({ok: "Okk"})
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: error.message || "Unexpected Server Error"
        });
    }
};

module.exports = addProduct;
