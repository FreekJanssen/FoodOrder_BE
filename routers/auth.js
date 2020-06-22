const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");

const { admin } = require("../models/");
//const { SALT_ROUNDS } = require("../config/constants");

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).send({ message: "Please provide both username and password" });
    };

    const user = await admin.findOne({ where: { username } });
    
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that username not found or password incorrect"
      });
    };

    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  };
});

module.exports = router;