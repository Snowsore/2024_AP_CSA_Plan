const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const hostname = "127.0.0.1";
const port = 3000;

var counter = 0;

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "index.html");

  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;

  console.log("Query parameters:", query);

  if (parsedUrl.pathname == "/") {
    fs.readFile(filePath, (err, data) => {
      if (err) return;

      counter++;

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
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
