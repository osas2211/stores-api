const products = require("./products.json")
const productModel = require("./productSchema")

const populate = async () => {
  await productModel.create(products)
}

module.exports = populate
