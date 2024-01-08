const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./home.html");
const aboutPage = readFileSync("./about.html");


const server = http.createServer(function (req, res) {
  const url = req.url;
  if (url !== "/favicon.ico") {
    if (url == "/") {
        res.writeHead(200,{'content-type': "text/html"});
      res.write(homePage);
    } else if (url == "/about") {
      res.write(aboutPage);
    }  else {
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
