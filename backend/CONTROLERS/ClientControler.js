const myproductModel = require("../MODELS/ProductModel");
const ClientControler = {
  ShopAll: async (req, res) => {
    const allprod = await myproductModel.find();
    res.json(allprod);
  },
  DiscoverSlider: async (req, res) => {
    const disSlider = await myproductModel.find({
      prodinfo: "oversize-tshirt",
    });

    res.json(disSlider);
  },
  WhatsNew: async (req, res) => {
    const id = req.params.id;
    if (id === "tshirt") {
      const GetTshirt = await myproductModel.find({ prodinfo: id });
      res.json(GetTshirt);
    } else if (id === "both") {
      const GetBoth = await myproductModel.find({
        $or: [{ prodinfo: "tshirt" }, { prodinfo: "jacket" }],
      });
      res.json(GetBoth);
    } else if (id === "shirt") {
      const GetShirt = await myproductModel.find({ prodinfo: id });
      res.json(GetShirt);
    } else if (id === "jacket") {
      const GetJacket = await myproductModel.find({ prodinfo: id });
      res.json(GetJacket);
    } else if (id === "hoodie") {
      const GetHoodie = await myproductModel.find({ prodinfo: id });
      res.json(GetHoodie);
    } else {
      res.json({ mes: "nothig found.." });
    }
  },
  Filter: async (req, res) => {
    let ProdTy = req.params.filterType;
    let ProductType = await myproductModel.find({ prodinfo: ProdTy });

    res.json(ProductType);
  },
};

module.exports = ClientControler;
