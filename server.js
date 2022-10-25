const express = require("express");
const app = express();
const PORT = 4000;
const productRoute = require("./routes/product");
const Product = require("./models").product;
const Category = require("./models").category;

app.use(express.json());

app.use("/products", productRoute);

app.get("/categories", async (req, res, next) => {
  try {
    const allCategories = await Category.findAll({ raw: true });
    res.send(allCategories);
  } catch (e) {
    next(e);
  }
});

// app.get("/prods", async (req, res, next) => {
//   const testProducts = await Product.findAll({
//     include: [{ model: Category }],
//   });
//   res.send(testProducts);
//   console.log(testProducts);
// });

// app.get("/hello", (req, res, next) => {
//   res.send("hello world");
// });

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
