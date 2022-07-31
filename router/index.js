const express = require("express")
const {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers")
const router = express.Router()

router.get("/", getProducts)
router.post("/", addProduct)
router.patch("/:id", updateProduct)
router.delete("/:id", deleteProduct)

module.exports = router
