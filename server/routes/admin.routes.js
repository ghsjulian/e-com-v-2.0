const express = require("express")
const router = express.Router()
const adminLogin = require("../admin-controllers/login.controller")

router.post("/login",adminLogin)

module.exports = router