const http = require("http");

function reqListener(req, res) {
  if (req.url !== "/favicon.ico") {
    console.log(req.url, req.method);
    res.write("Response From Server...");
    res.end();
  }
}

const server = http.createServer(reqListener);

server.listen(5000, () => {
  console.log(`Server Running on PORT 5000`);
});
