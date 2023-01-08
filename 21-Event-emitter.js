const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received ${name} ${id}`);
});
customEmitter.emit("response", "Manoj", 6174);
customEmitter.on("response", () => {
  console.log(`some other logic here `);
});
