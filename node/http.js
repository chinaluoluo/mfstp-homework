const http = require('http');
const fs = require("fs");
const path = require("path");
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    if (req.url == "/upload") {
        fs.mkdir("file", (err) => { console.log(err) });
        var writerStream = fs.createWriteStream("./file/hello.txt", { encoding: "UTF-8" });
        req.on("data", (chunk) => {
            writerStream.write(chunk);
        })
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});
server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`);
});