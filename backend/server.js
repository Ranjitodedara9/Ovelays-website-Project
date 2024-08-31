const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./ROUTES/Routes");
console.log("aa navin ma add kru ane aavu pn gu");
const PORT = 4000;
mongoose
  .connect("mongodb://localhost:27017/overlays-web-database")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/products", router);
app.listen(PORT, () => console.log(`server started at ${PORT}`));
