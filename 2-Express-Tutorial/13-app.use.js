const express = require("express");
const app = express();

// req => middleware =>res
const logger = require("./logger");

app.use("/api", logger);

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
