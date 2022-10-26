const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const bcrypt = require("bcrypt");
const router = new Router();
const User = require("../models").user;

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send("Please provide valid information");
    return;
  }
  // compare that info to check if the user exists in the db
  const userToAuthenicate = await User.findOne({ where: { email: email } });

  if (!userToAuthenicate) {
    res.status(400).send("Password or name! is incorrect");
    return;
  }
  // check the password
  if (!bcrypt.compareSync(password, userToAuthenicate.password)) {
    res.status(400).send("Password! or name is incorrect");
    return;
  }
  // generate a token
  const token = toJWT({ userId: userToAuthenicate.id });
  // send the token back
  res.send({ token: token });
});

module.exports = router;
