const mongoose = require("mongoose");

const products = new mongoose.Schema({
  price: { type: Number, required: true },
  size: { type: Array, required: true },
  name: { type: String, required: true },
  img: { type: String, required: true },
  hovimg: { type: String, required: true },
  prodinfo: { type: String, require: true },
});

module.exports = mongoose.model("allpros", products);
