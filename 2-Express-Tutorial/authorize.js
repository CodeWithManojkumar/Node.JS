const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "Manoj") {
    req.user = { name: "Manoj", id: 3 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
module.exports = authorize;
