const { myproductModel } = require("../MODELS/ProductModel");
const { UserModel } = require("../MODELS/ProductModel");
const ClientControler = {
  ShopAll: async (req, res) => {
    console.log(req.params.nav);
    if (req.params.nav === "allproducts") {
      console.log("show");
      const allprod = await myproductModel.find();
      console.log(allprod);
      res.json(allprod);
    } else {
      const navprod = await myproductModel.find({ prodinfo: req.params.nav });
      res.json(navprod);
    }
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
  SignUpUser: async (req, res) => {
    const { usernm, mail, pass } = req.body;
    const createuser = await UserModel({
      username: usernm,
      email: mail,
      password: pass,
    });
    createuser.save();
    if (createuser) {
      res.json({ mes: true });
    } else {
      res.json({ mes: "fetching problem" });
    }
  },
  LoginUser: async (req, res) => {
    const { usernm, pass } = req.body;
    const finduser = await UserModel.find({ username: usernm, password: pass });
    console.log(finduser);
    if (finduser.length > 0) {
      res.json({ mes: true });
    } else {
      res.json({ mes: false });
    }
  },
};

module.exports = ClientControler;
