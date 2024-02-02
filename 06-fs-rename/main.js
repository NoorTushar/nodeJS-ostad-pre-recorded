const http = require("http");
const fs = require("fs");

const port = 5500;

// async

const server = http.createServer((req, res) => {
   if (req.url === "/") {
      fs.rename("demo.txt", "demo-renamed.text", (error) => {
         if (error) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("ERROR in renaming file");
            res.end();
         } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("Success in Renaming File");
            res.end();
         }
      });
   }
});

// sync

// const server = http.createServer((req, res) => {
//    if (req.url === "/") {
//       let error = fs.renameSync("synchronous.txt", "asynchronous.txt");

//       if (error) {
//          res.writeHead(200, { "Content-Type": "text/html" });
//          res.write("ERROR in writing file");
//          res.end();
//       } else {
//          res.writeHead(200, { "Content-Type": "text/html" });
//          res.write("Success in Writing File");
//          res.end();
//       }
//    }
// });
server.listen(port, () => {
   console.log(`server is running`);
});
