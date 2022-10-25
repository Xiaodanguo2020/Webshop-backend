const { Router } = require("express");
const router = new Router();
const Product = require("../models").product;
const Category = require("../models").category;

router.get("/", async (req, res, next) => {
  try {
    const allProducts = await Product.findAll({
      include: [{ model: Category }],
    });
    res.send(allProducts);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const oneProduct = await Product.findByPk(id, {
      include: [{ model: Category, attributes: ["title"] }],
      where: { id: id },
    });
    res.send(oneProduct);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
