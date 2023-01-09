//Modules
const { john } = require("./4-names");
const names = require("./4-names");
// console.log(names);
const sayHi = (name) => {
  console.log(`Hello ${name}`);
};
// sayHi(secret);
sayHi(john);
sayHi(names.john);
