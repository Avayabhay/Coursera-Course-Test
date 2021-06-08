const http = require("http");
const fs = require("fs");
const { Server } = require("node:http");
var html = fs.readFileSync("index.html");


http.createServer((req,res) =>{
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    res.end(html);
});

Server.listen(80, "127.0.0.1", () =>{
    console.log("Running");
})