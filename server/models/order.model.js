const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        customer_id: {
            type: String,
            required: true
        },
        customer_name: {
            type: String,
            required: true
        },
        customer_address: {
            type: String,
            required: true
        },
        customer_payment: {
            type: String,
            required: true
        },
        product_id: {
            type: String,
            default: ""
        },
        product_info: {
            type: Object,
            default: {}
        },
        product_images: {
            type: Array,
            default: []
        }
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
