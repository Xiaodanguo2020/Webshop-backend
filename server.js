const express = require("express");
const app = express();
const PORT = 4000;
const productRoute = require("./routes/product");
const categoryRoute = require("./Routes/category");
const Product = require("./models").product;
const Category = require("./models").category;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/products", productRoute);
app.use("/categories", categoryRoute);

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
