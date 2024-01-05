const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(201);
  res.write("<h1>Response From Server...</h1>");
  res.write("<p>User Created Succesfull!!<p>");
  res.end();
});

server.listen(5000, () => {
  console.log(`Server Running on PORT 5000`);
});

setTimeout(server.close, 10000);
