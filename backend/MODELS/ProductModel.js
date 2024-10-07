const mongoose = require("mongoose");

const products = new mongoose.Schema({
  price: { type: Number },
  size: { type: Array },
  name: { type: String },
  img: { type: String },
  hovimg: { type: String },
  prodinfo: { type: String },
});
const poster = new mongoose.Schema({
  image: String,
});

const user = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const productSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  pincode: Number,
  // Add other fields as necessary
});

const Order = mongoose.model("Order", productSchema);

const myproductModel = mongoose.model("allpros", products);
const PosterModel = mongoose.model("posters", poster);
const UserModel = mongoose.model("user", user);

module.exports = {
  myproductModel,
  PosterModel,
  UserModel,
  Order,
};
