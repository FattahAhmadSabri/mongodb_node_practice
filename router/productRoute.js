const express = require("express")

const {createProductController}= require("../controller/productController")

const router = express.Router()

router.post("/product",createProductController)

module.exports =router