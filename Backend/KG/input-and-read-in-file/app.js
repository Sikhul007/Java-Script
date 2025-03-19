const http = require("http");
const reqHandler = require("./index");
const server = http.createServer(reqHandler);
const port = 3001;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
