
const path = require("path")
const express = require("express")
const router = express.Router()
const isAdmin = require("../auth/is.admin")
const uploader = require("../configs/multer.config")
const uploadFolder = path.join(__dirname, "../products/");
const upload = uploader(uploadFolder);
const adminLogin = require("../admin-controllers/login.controller")
const addProduct = require("../admin-controllers/add-product.controller")

router.post("/login",adminLogin)
router.post("/add-product",isAdmin,upload.array("files"),addProduct)

module.exports = router