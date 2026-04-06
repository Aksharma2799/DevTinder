const mongoose = require("mongoose");
const { use } = require("react");
const { trim } = require("validator");

//schema

// mongoose.Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
    minLength: 8,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
    trim: true,
    minLength: 8,
    maxLength: 50,
  },
  imageUrl: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
