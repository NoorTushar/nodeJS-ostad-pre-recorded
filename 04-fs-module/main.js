const http = require("http");

// new
const fs = require("fs");

const server = http.createServer((req, res) => {
   if (req.url === "/") {
      // new
      fs.readFile("home.html", (error, data) => {
         res.writeHead(200, { "Content-Type": "text/html" });
         res.write(data);
         res.end();
      });
   }
});

const port = 5500;

server.listen(port, () => {
   console.log(`server is running successfully`);
});

/*
// Synchronous Way

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
   // asynchronous method:
   if (req.url === "/") {
      const data = fs.readFileSync("home.html");

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
   }
});

const port = 5500;

server.listen(port, () => {
   console.log(`server is running successfully`);
});


*/
