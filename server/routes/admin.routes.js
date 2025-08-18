const express = require("express")
const router = express.Router()
const isAdmin = require("../auth/is.admin")
const adminLogin = require("../admin-controllers/login.controller")
const addProduct = require("../admin-controllers/add-product.controller")

router.post("/login",adminLogin)
router.post("/add-product",isAdmin,addProduct)

module.exports = router