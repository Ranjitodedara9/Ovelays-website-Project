const ClientControler = require("../CONTROLERS/ClientControler");
const AdminControler = require("../CONTROLERS/AdminControler");
const router = require("express").Router();
const multer = require("multer");
const passport = require("passport");
const { UserModel } = require("../MODELS/ProductModel");
const LocalStrategy = require("passport-local").Strategy;
router.get("/allProd/:nav", ClientControler.ShopAll);
router.post("/SignUp", ClientControler.SignUpUser);
router.get("/DispUser", ClientControler.DispUser);

passport.use(
  new LocalStrategy(async (username, password, done) => {
    const user = await UserModel.findOne({ username: username });
    console.log("mdi gyo :", user);
    if (!user) {
      return done(null, false, { message: "User not found" });
    }
    const checkpass = user.password === password;
    if (!checkpass) {
      return done(null, false, { message: "incorected password" });
    } else {
      return done(null, user);
    }
  })
);
router.post(
  "/Login",

  (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      console.log(req.body);
      if (!user) return res.status(401).json({ mes: info.message });
      else return res.status(200).json({ mes: "login successfuly" });
    })(req, res, next);
  },

  ClientControler.LoginUser
);
router.post("/HeroImage", AdminControler.FileUpload);
router.get("/", ClientControler.PersonData);
router.post("/add", AdminControler.ordersadd);
router.get("/get", AdminControler.getorderdet);
router.delete("/:deleteid", ClientControler.DeleteUser);
router.get("/oversized-tshirt", ClientControler.DiscoverSlider);
router.get("/:id", ClientControler.WhatsNew);
router.post("/createCloth", AdminControler.CreateProducts);
router.put("/EditCloth", AdminControler.EditProducts);
router.delete("/DeleteCloth", AdminControler.DeleteProducts);
router.get("/Filter/:filterType", ClientControler.Filter);
module.exports = router;
