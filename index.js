const fs = require("fs");
//blocking way
const fileToread = fs.readFileSync("./starter/txt/input.txt", "utf-8");
const fileToWrite = `${fileToread} ${new Date()}`;
fs.writeFileSync("./starter/txt/start.txt", fileToWrite);
console.log("file written ");
//non-blocking

const fileRead = fs.readFile(
  "./starter/txt/start.txt",
  "utf-8",
  (err, data) => {
    fs.writeFile("./starter/txt/output.txt", `${data}`, "utf8", (err) => {});
  },
);

// write file async
// fs.writeFile("./starter/txt/output.txt", "utf-8", fileRead);
// console.log("file written sync ==> output.txt");
