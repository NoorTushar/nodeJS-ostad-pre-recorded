const http = require("http");
const url = require("url");

const myURL = "https://www.youtube.com/results?search_query=mern+stack";

const myURLObject = url.parse(myURL);
console.log(myURLObject);

const myHref = `myHref: ${myURLObject.href}`;
const myHost = `myHost: ${myURLObject.host}`;
const myHostName = `myHostName: ${myURLObject.hostname}`;
const myPath = `myPath: ${myURLObject.path}`;
const myPathName = `myPathName: ${myURLObject.pathname}`;

const server = http.createServer((req, res) => {
   res.write(myHref + "<br>");
   res.write(myHost + "<br>");
   res.write(myHostName + "<br>");
   res.write(myPath + "<br>");
   res.write(myPathName + "<br>");
   res.end();
});

const port = 5500;

server.listen(port, () => {
   console.log(`server is running at port: ${port}`);
});
