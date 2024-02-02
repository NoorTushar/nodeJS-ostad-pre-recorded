const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
   res.end("bye");
});

const port = 5500;

server.listen(port, () => {
   console.log(`server is running successfully`);
});
