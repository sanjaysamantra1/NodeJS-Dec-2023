const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url !== "/favicon.ico") {
    let urlObj = url.parse(req.url, true);
    let { name, add } = urlObj.query;

    if (name && add) {
      res.writeHead(200, { "conetent-type": "text/html" });
      msg = `<p>Your Name is : ${name}, Your Address is ${add}</p>`;
    } else {
      res.writeHead(400, { "conetent-type": "text/html" });
      msg = `<p>Bad Request</p>`;
    }
    res.write(msg);
    res.end();
  }
});

server.listen(5000, () => {
  console.log(`Server Running on PORT 5000`);
});
