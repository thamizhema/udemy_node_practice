const http = require("http");

const PORT = 3000;
const server = http.createServer((req, res) => {
  //   res.writeHead(200, { "Content-Type": "text/plains" });
  //   res.end("I love node jss");

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ id: 1, name: "kayalvizhi" }));
});
server.listen(PORT, () => {
  console.log(`this is link http://localhost:${PORT}`);
});
