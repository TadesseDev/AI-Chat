const http = require("http");
const { hostname } = require("os");
const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Response served from " + hostname);
});

server.listen(port, hostname, () => {
  console.log("Server running at http://${hostname}:${port}/");
});
