const express = require("express")
const app = express()
const connect = require("./db/connect")
const router = require("./router")
require("dotenv").config()

const PORT = process.env.PORT || 5500

app.use("/api/products", router)

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
