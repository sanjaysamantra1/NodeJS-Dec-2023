const http = require("http");
const users = require("./users.json");

const server = http.createServer((req, res) => {
  if (req.url !== "/favicon.ico") {
    console.log(req.url.split("/"));
    const userId = +req.url.split("/").pop();
    const userObj = users.find((user) => user.id === userId);
    if (userObj) {
      res.write(JSON.stringify(userObj));
    } else {
      res.write(`<h1>No User found with id ${userId}</h1>`);
    }
    res.end();
  }
});

server.listen(5000, () => {
  console.log(`Server Running on PORT 5000`);
});
