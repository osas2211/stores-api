const express = require("express")
const { getProducts, addProduct, updateProduct } = require("../controllers")
const router = express.Router()

router.get("/", getProducts)
router.post("/", addProduct)
router.patch("/:id", updateProduct)

module.exports = router
