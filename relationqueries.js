const Product = require("./models").product;
const Category = require("./models").category;

const Allproducts = async (req, res, next) => {
  const categories = await Category.findall({
    include: [{ model: Product, attributes: ["title"] }],
  });
  console.log(categories);
};

Allproducts();

// router.get("/", async (req, res, next) => {
//     const books = await Book.findAll();
//     res.send(books);
//   });
