const productModel = require("../model/productSchema")

const parseString = (str) => {
  return str.split(",").join(" ")
}

//GET products
const getProducts = async (req, res, next) => {
  const { title, category, sort, fields, limit, page } = req.query
  const queryObj = {}
  let result = productModel.find(queryObj)
  if (title) {
    queryObj.title = { $regex: title, $options: "i" }
  }

  if (category) {
    queryObj.category = category
  }

  if (sort) {
    result = result.sort(parseString(sort))
  }
  if (fields) {
    result = result.select(parseString(fields))
  }
  if (limit) {
    result = result.limit(Number(limit))
  }

  //Pagination
  if (page) {
    let limit = Number(req.query.limit) || 6
    let skip = (Number(page) - 1) * limit
    result = result.skip(skip).limit(limit)
  }

  try {
    const products = await result.find(queryObj)
    return res
      .status(200)
      .json({ success: true, length: products.length, products: products })
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {
  getProducts,
}
