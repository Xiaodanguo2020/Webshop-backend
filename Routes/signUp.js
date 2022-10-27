const { Router } = require("express");
const router = new Router();
const User = require("../models").user;
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    console.log(name, email, password, "this is the data");

    if (!name || !email || !password) {
      res.status(404).send("Missing parameters");
    } else {
      console.log("reached here");

      const newUser = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
      });
      res.json(newUser);
    }
  } catch (e) {
    next("error", e);
  }
});
module.exports = router;
