const http = require("http");
const fs = require("fs");

const port = 5500;

// async

// const server = http.createServer((req, res) => {
//    if (req.url === "/") {
//       fs.unlink("demo.txt", (error) => {
//          if (error) {
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.write("Delete Not Successful");
//             res.end();
//          } else {
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.write("Delete Successful");
//             res.end();
//          }
//       });
//    }
// });

// sync

const server = http.createServer((req, res) => {
   if (req.url === "/") {
      let error = fs.unlinkSync("sync.txt");

      if (error) {
         res.writeHead(200, { "Content-Type": "text/html" });
         res.write("Delete Not Successful");
         res.end();
      } else {
         res.writeHead(200, { "Content-Type": "text/html" });
         res.write("Delete Successful");
         res.end();
      }
   }
});

server.listen(port, () => {
   console.log(`server is running`);
});
