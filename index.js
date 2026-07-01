const fs = require("fs");
const http = require("http");
const url = require("url");
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

//create a simple web server // create routes
const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/overview") {
    res.end("overview | main page");
  } else if (req.url === "/product") {
    res.writeHead(202, {
      "Content-type": "text/html",
    });
    res.end("<h1>Product page </h1>");
  }
});

const PORT = 3000;
server.listen(PORT, "127.0.0.1", () => {
  console.log("listening on port " + PORT);
});
//
