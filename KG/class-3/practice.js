const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(req.url, req.method, req.headers);\
  if (req.url === "/home") {
    res.write(`
    <html>
    <head>
      <title>Myntra</title>
    </head>
    <body>
        <h1>Welcome to Myntra</h1>
    </body>
    </html>`);
  } else if (req.url === "/about") {
    res.write(`
    <html>
    <head>
      <title>Myntra</title>
    </head>
    <body>
        <h1>About Myntra</h1>
    </body>
    </html>`);
  } else if (req.url === "/contact") {
    res.write(`
    <html>
    <head>
      <title>Myntra</title>
    </head>
    <body>
        <h1>Contact Myntra</h1>
    </body>
    </html>`);
  } else {
    res.write(`
      <html>
      <head>
        <title>Myntra</title>
      </head>
      <body>
          <nav>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            </ul>
          </nav>
      </body>
      </html>`);
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
