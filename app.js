const express = require("express")
const app = express()
const connect = require("./db/connect")
const productModel = require("./model/productSchema")
require("dotenv").config()

const PORT = process.env.PORT || 5500

app.get("/api/products", async (req, res, next) => {
  try {
    const products = await productModel.find({})
    return res.status(200).json({ success: true, products: products })
  } catch (error) {
    console.log(error.message)
  }
})

const start = async () => {
  try {
    await connect()
    console.log("db is connected")
    app.listen(PORT, () => {
      console.log(`server is listening to port ${PORT}`)
    })
  } catch (err) {
    console.log(err.message)
  }
}

start()
