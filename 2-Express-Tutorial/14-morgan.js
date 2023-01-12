const express = require("express");
const authorize = require("./authorize");
const app = express();
const morgan = require("morgan");
// req => middleware =>res
const logger = require("./logger");

// app.use([authorize, logger]);
// app.use(express.static("./public"));

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});
app.get("/api/contact", (req, res) => {
  res.send("Contact Page");
});
app.get("/api/projects", (req, res) => {
  res.send("Projects Page");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
