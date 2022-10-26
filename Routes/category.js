const { Router } = require("express");
const router = new Router();
const Category = require("../models").category;

router.get("/", async (req, res, next) => {
  const allCategories = await Category.findAll();
  res.send(allCategories);
});

module.exports = router;
