/*
const http = require(`http`);

const server = http.createServer((req, res) => {
   if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<h1>This is Home Page....</h1>`);
      res.end();
   } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<h1>This is About Page</h1>`);
      res.end();
   } else if (req.url === "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<h1>This is Contact Page</h1>`);
      res.end();
   }
});

const port = 5050;

server.listen(port, () => {
   console.log(`server is running`);
});


*/

const http = require("http");

const server = http.createServer((req, res) => {
   if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("This is Home Page");
      res.end();
   } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("This is About Page");
      res.end();
   } else if (req.url === "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("This is Contact Page");
      res.end();
   }
});

const port = 5500;

server.listen(port, () => {
   console.log(`server is running at port ${port}`);
});
