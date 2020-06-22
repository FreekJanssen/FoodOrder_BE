const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET || '387ndigusnuzo7n47ctnghnjkasor'

function toJWT(data) {
  return jwt.sign(data, jwtSecret, { expiresIn: "12h" });
}

function toData(token) {
  return jwt.verify(token, jwtSecret);
}

module.exports = { toJWT, toData };
