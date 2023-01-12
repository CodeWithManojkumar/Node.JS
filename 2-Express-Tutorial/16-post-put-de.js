const express = require("express");
let { people } = require("./data");

const app = express();

app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: "Provide name value" });
  }
  res.status(201).send({ success: true, person: name });
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: "Provide name value" });
  }
  res.status(201).send({ success: true, data: [...people, name] });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`<h1><code>Welcome ${name}</h1></code>`);
  }
  res.status(401).send("Provide credentials");
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id == Number(id));
  if (!person) {
    res
      .status(400)
      .json({ success: false, msg: `Provide name value with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

app.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id == Number(req.params.id));

  if (!person) {
    res
      .status(400)
      .json({ success: false, msg: `Provide name value with id ${id}` });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
