let { people } = require("../data");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`<h1><code>Welcome ${name}</h1></code>`);
  }
  res.status(401).send("Provide credentials");
});

module.exports = router;
