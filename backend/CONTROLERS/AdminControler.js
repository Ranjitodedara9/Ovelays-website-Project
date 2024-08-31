const myproductModel = require("../MODELS/ProductModel");

const AdminControler = {
  CreateProducts: async (req, res) => {
    const createcloth = await myproductModel.create({
      name: req.body.clothnm,
      img: req.body.imgurl,
      hovimg: req.body.hovimg,
      price: Number(req.body.number),
      prodinfo: req.body.clothinfo,
      size: req.body.size,
    });

    if (createcloth) {
      res.json({ mes: true });
    } else {
      console.log("Failed to create cloth entry");
      res.json({ mes: false });
    }
  },
  EditProducts: async (req, res) => {
    console.log("edit thy gyu huiree...");
    const editclo = await myproductModel.findByIdAndUpdate(
      req.body.ind,
      {
        img: req.body.imgurl,
        name: req.body.clothnm,
        price: req.body.number,
        prodinfo: req.body.clothinfo,
        hovimg: req.body.hovimg,
      },
      { new: true }
    );
    if (editclo) {
      res.json({ mes: "done" });
    } else {
      res.json({ mes: "not done" });
    }
  },
  DeleteProducts: async (req, res) => {
    const deleteclo = await myproductModel.deleteOne({ _id: req.body.ind });

    if (deleteclo) {
      res.json({ mes: true });
    } else {
      res.json({ mes: false });
    }
  },
};

module.exports = AdminControler;
