const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
   if (req.url === "/" || req.url === "/home") {
      let data = fs.readFileSync("home.html", "utf-8");
      res.end(data);
   } else if (req.url === "/about") {
      let data = fs.readFileSync("about.html", "utf-8");
      res.end(data);
   } else if (req.url === "/contact") {
      let data = fs.readFileSync("contact.html", "utf-8");
      res.end(data);
   } else if (req.url === "/terms") {
      let data = fs.readFileSync("terms.html", "utf-8");
      res.end(data);
   }
});

const port = 5500;
server.listen(port, ()=>
   {console.log(`server running successfully at port: ${port}`)}
);


