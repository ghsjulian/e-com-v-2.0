const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            required: true,
        },
        product_info : {
            type: Array,
            default : []
        },
        product_images : {
            type : Array,
            default : []
        },
    },
       { timestamps: true}
); 

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
