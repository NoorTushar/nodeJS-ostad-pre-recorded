const http = require("http");
const fs = require("fs");
const { error } = require("console");

const port = 5500;

// async

const server = http.createServer((req, res) => {
   if (req.url === "/") {
      fs.exists("demo.txt", (result) => {
         if (result) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("File exists");
            res.end();
         } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("File Does not Exist");
            res.end();
         }
      });
   }
});

// sync

// const server = http.createServer((req, res) => {
//    if (req.url === "/") {
//       let result = fs.existsSync("hello.txt");

//       if (result) {
//          res.writeHead(200, { "Content-Type": "text/html" });
//          res.write("File exists");
//          res.end();
//       } else {
//          res.writeHead(200, { "Content-Type": "text/html" });
//          res.write("File Does not Exist");
//          res.end();
//       }
//    }
// });

server.listen(port, () => {
   console.log(`server is running`);
});
