const express = require("express");
const router = express.Router();
const getAllProducts = require("../product-controllers/get-all-products.controller");
const getSingleProduct = require("../product-controllers/get-product-by-id.controller");

router.get("/get-all-products", getAllProducts);
router.get("/get-product/:product_id", getSingleProduct);

module.exports = router;
