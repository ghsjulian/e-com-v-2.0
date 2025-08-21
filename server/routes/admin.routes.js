
const path = require("path")
const express = require("express")
const router = express.Router()
const isAdmin = require("../auth/is.admin")
const uploader = require("../configs/multer.config")
const uploadFolder = path.join(__dirname, "../products/");
const upload = uploader(uploadFolder);
const adminLogin = require("../admin-controllers/login.controller")
const addProduct = require("../admin-controllers/add-product.controller")
const getAllProducts = require("../admin-controllers/get-all-products.controller")
const getProductById = require("../admin-controllers/get-product-by-id.controller")
const editProduct = require("../admin-controllers/edit-product.controller")

router.post("/login",adminLogin)
router.post("/add-product",isAdmin,upload.array("files"),addProduct)
router.get("/get-all-products",isAdmin,getAllProducts)
router.get("/get-product/:product_id",isAdmin,getProductById)
router.put("/edit-product/:product_id",isAdmin,upload.array("files"),editProduct)

module.exports = router