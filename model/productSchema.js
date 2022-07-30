const { Schema, model } = require("mongoose")
const productSchema = new Schema({
  title: {
    type: String,
    maxLength: [250, "Title must not exceed max word Length of 250"],
    required: [true, "Title is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  description: {
    type: String,
    required: [true, "Description is Required"],
  },
  category: {
    type: String,
    default: "generic",
  },
  image: {
    type: String,
  },
  rating: {
    type: Object,
    default: {
      rating: 0,
      count: 0,
    },
  },
})

module.exports = model("product", productSchema)
