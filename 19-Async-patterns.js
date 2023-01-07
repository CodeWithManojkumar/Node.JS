const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile("./content/first.txt", "utf8", (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};
// getText("../content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// const start = async () => {
//   const first = await getText("./content/first.txt");
//   console.log(first);
// };

const start = async () => {
  try {
    const first = await getText("./content/first.txt");
    const second = await getText("./content/second.txt");
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();
