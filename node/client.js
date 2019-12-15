var http = require("http");

http.get("http://127.0.0.1:3000", function(data) {
    var str = "";
    data.on("data", function(chunk) {
        str += chunk; //监听数据响应，拼接数据片段
    })
    data.on("end", function() {
        console.log(str.toString())
    })
})