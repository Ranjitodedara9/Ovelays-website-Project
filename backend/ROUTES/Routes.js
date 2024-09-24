const ClientControler = require("../CONTROLERS/ClientControler");
const AdminControler = require("../CONTROLERS/AdminControler");
const router = require("express").Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "./Public/HeroImg");
  },
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });
router.get("/allProd/:nav", ClientControler.ShopAll);
router.post("/SignUp", ClientControler.SignUpUser);
router.post("/Login",ClientControler.LoginUser)
router.post("/HeroImage", upload.single("file"), AdminControler.FileUpload);
router.get("/oversized-tshirt", ClientControler.DiscoverSlider);
router.get("/:id", ClientControler.WhatsNew);
router.post("/createCloth", AdminControler.CreateProducts);
router.put("/EditCloth", AdminControler.EditProducts);
router.delete("/DeleteCloth", AdminControler.DeleteProducts);
router.get("/Filter/:filterType", ClientControler.Filter);
module.exports = router;
