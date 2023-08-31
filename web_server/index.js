const http = require("http");

const PORT = 3000;
// ======================
// part 1
// const server = http.createServer((req, res) => {
//   //   res.writeHead(200, { "Content-Type": "text/plains" });
//   //   res.end("I love node jss");
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(JSON.stringify({ id: 1, name: "kayalvizhi" }));
// });
// ======================
//part 2
const server = http.createServer();

server.on("request", (req, res) => {
  //   res.writeHead(200, { "Content-Type": "application/json" });
  res.statusCode = 200;

  if (req.url === "/friends") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ code: "success", data: ["kayal", "hema"] }));
  } else if (req.url === "/msg") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
        <head>
         <meta charset="UTF-8">
        </head>
        <body>
        <h1>I love❤️ Kayalvizhi👸🏻  so much  </h1>
        </body>
        </html>
        `);
    res.end();
  } else {
    res.statusCode = 404;

    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`this is link http://localhost:${PORT}`);
});
