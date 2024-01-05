const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url !== "/favicon.ico") {
    console.log(req.url);
    const userId = req.url.split("/").pop();
    res.write(`<h1>This is The details of user: ${userId}</h1>`);
    res.end();
  }
});

server.listen(5000, () => {
  console.log(`Server Running on PORT 5000`);
});
