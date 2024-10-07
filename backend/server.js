const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./ROUTES/Routes");
const path = require("path");
const PORT = 4000;
const multer = require("multer");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
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
app.use(passport.initialize());
app.use("/Public", express.static(path.join(__dirname, "Public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/products", router);
app.use("/FileUpload", router);
app.use("/data", router);
app.use("/person", router);
app.use("/order", router);
app.use("/user", router);

app.listen(PORT, () => console.log(`server started at ${PORT}`));
