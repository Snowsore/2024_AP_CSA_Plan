const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const hostname = "0.0.0.0";
const port = 3000;

var counter = 0;

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "index.html");
  const clickerFilePath = path.join(__dirname, "clicker.html");

  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;


  if (parsedUrl.pathname == "/") {
    fs.readFile(filePath, (err, data) => {
      if (err) return;

      counter++;

      console.log("Query parameters:", query);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
    return;
  }

  if (parsedUrl.pathname == "/counter") {
    fs.readFile(filePath, (err, data) => {
      if (err) return;

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ counter }));
    });
    return;
  }

  console.log(parsedUrl.pathname)
  if (parsedUrl.pathname == "/clicker") {
    fs.readFile(clickerFilePath, (err, data) => {
      if (err) return;

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
    return;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
