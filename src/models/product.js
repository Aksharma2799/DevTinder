const mongoose = require("mongoose");
const { use } = require("react");

//schema

// mongoose.Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
