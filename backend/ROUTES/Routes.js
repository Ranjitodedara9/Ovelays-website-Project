const ClientControler = require("../CONTROLERS/ClientControler");
const AdminControler = require("../CONTROLERS/AdminControler");
const router = require("express").Router();

router.get("/allProd", ClientControler.ShopAll);
router.get("/oversized-tshirt", ClientControler.DiscoverSlider);
router.get("/:id", ClientControler.WhatsNew);
router.post("/createCloth", AdminControler.CreateProducts);
router.put("/EditCloth", AdminControler.EditProducts);
router.delete("/DeleteCloth", AdminControler.DeleteProducts);
router.get("/Filter/:filterType", ClientControler.Filter);
module.exports = router;
