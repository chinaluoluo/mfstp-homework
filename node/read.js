const fs = require("fs");
const path = require("path");

let filename = path.resolve('./hello.txt');
let readStream = fs.createReadStream(filename, { encoding: 'utf8' });
readStream.on("data", (data) => {
    console.log(data);
})