const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
  setTimeout(next, 2000);
});

server.use(router);
server.listen(4000, () => {
  console.log("JSON Server is running on http://localhost:3306/");
});
