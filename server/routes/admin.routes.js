
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
const getAllCustomers = require("../admin-controllers/get-all-customers.controller")
const getProductById = require("../admin-controllers/get-product-by-id.controller")
const editProduct = require("../admin-controllers/edit-product.controller")
const deleteProduct = require("../admin-controllers/delete-product.controller")
const deleteCustomer = require("../admin-controllers/delete-customer.controller")
const createCategory = require("../admin-controllers/create-category.controller")
const getSettings = require("../admin-controllers/get-settings.controller")
const adminLogut = require("../admin-controllers/logout.controller")

router.post("/login",adminLogin)
router.post("/add-product",isAdmin,upload.array("files"),addProduct)
router.get("/get-all-products",isAdmin,getAllProducts)
router.get("/get-product/:product_id",isAdmin,getProductById)
router.delete("/delete-product/:product_id",isAdmin,deleteProduct)
router.delete("/delete-customer/:customer_id",isAdmin,deleteCustomer)
router.put("/edit-product/:product_id",isAdmin,upload.array("files"),editProduct)
router.get("/get-all-customers",isAdmin,getAllCustomers)
router.post("/create-category",isAdmin,createCategory)
router.get("/get-settings",isAdmin,getSettings)
router.post("/logout",isAdmin,adminLogut)

module.exports = router