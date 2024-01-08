const http = require("http");

const server = http.createServer(function (req, res) {
  const url = req.url;
  if (url !== "/favicon.ico") {
    if (url == "/") {
      res.write("<h1>Home page</h1>");
    } else if (url == "/about") {
      res.write("<h1>You are in About US page</h1>");
    } else if (url == "/contactus") {
      res.write("<h1>You are in ContactUS page</h1>");
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(`
            <h1>OOPS</h1>
            <p>Sorry, Not able to find this route<p>
            <a href="/">Go To Home</a>
        `);
    }
    res.end();
  }
});

server.listen(5000, () => {
  console.log("listening on port 5000");
});
