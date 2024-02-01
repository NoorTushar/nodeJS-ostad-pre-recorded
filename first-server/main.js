// 1.import http module
const http = require("http");

// 2.use createServer method.

/*
http.createServer((req, res) => {
   res.end("Hello World");
});
*/

// 3. store it in a variable 'server'

const server = http.createServer((req, res) => {
   res.end("<h1>Hello World</h1>");
});

// 4. create a path for the server

let port = 5050;

server.listen(port, () => {
   console.log(`sever is running`);
});
