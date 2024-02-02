const http = require("http");
const fs = require("fs");

const port = 5500;

// async

// const server = http.createServer((req, res) => {
//    if (req.url === "/") {
//       fs.writeFile("demo.txt", "this is created by NodeJS", (error) => {
//          if (error) {
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.write("ERROR in writing file");
//             res.end();
//          } else {
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.write("Success in Writing File");
//             res.end();
//          }
//       });
//    }
// });

// sync

const server = http.createServer((req, res) => {
   if (req.url === "/") {
      let error = fs.writeFileSync(
         "synchronous.txt",
         "this is created by NodeJS synchronous way."
      );

      if (error) {
         res.writeHead(200, { "Content-Type": "text/html" });
         res.write("ERROR in writing file");
         res.end();
      } else {
         res.writeHead(200, { "Content-Type": "text/html" });
         res.write("Success in Writing File");
         res.end();
      }
   }
});
server.listen(port, () => {
   console.log(`server is running`);
});
