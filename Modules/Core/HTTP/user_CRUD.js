const http = require("http");
const users = require("./users.json");

const server = http.createServer(function (req, res) {
  const { url, method } = req;
  const userId = url.split("users/").pop();
  console.log(url,method,userId);

  if (url === "/") {
    res.write("<h1>This is Home page</h1>");
  } else if (url === "/users" && method === "GET") {
    res.write(JSON.stringify(users));
  } else if (url.includes("/users") && method === "GET" && userId) {
    const oneuser = users.find((user) => user.id == userId);
    res.write(JSON.stringify(oneuser));
  } else if (url === "/users" && method === "POST") {
    res.write("<h1>User Created Successfully</h1>");
  } else if (url === "/users" && method === "PUT") {
    res.write("<h1>User Updated Successfully</h1>");
  } else if (url === "/users" && method === "PATCH") {
    res.write("<h1>User Updated Successfully</h1>");
  } else if (url.includes("/users") && method === "DELETE") {
    res.write("<h1>User Deleted Successfully</h1>");
  }
  res.end();
});

server.listen(5000);
