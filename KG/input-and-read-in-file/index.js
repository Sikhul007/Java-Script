const fs = require("fs");

const userReqHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head>");
    res.write("<title>My First Server</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>Enter your details:</h1>");
    res.write(`
      <form action="/submit-details" method="POST">
        <input type="text" name="username" placeholder="Name" required /><br><br>
    
        <label for="male">Male</label>
        <input type="radio" name="gender" id="male" value="male" required />
    
        <label for="female">Female</label>
        <input type="radio" name="gender" id="female" value="female" required /><br><br>
    
        <button type="submit">Submit</button>
      </form>
    `);
    res.write("</body>");
    res.end("</html>");
    return res.end();
  } else if (req.url === "/submit-details" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const param = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(param);
      console.log(bodyObject);
      fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  } else {
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Page Not Found</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>Page Not Found</h1>");
    res.write("</body>");
    res.end("</html>");
    return res.end();
  }
};

module.exports = userReqHandler;
