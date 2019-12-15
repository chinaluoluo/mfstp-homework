let express = require('express')
var user = {
    id: 1,
    username: 789,
    password: 123,
    email: 456
}
let app = express();
app.get("/", (req, res) => {
    res.write(JSON.stringify(user));
    res.end();
})
app.post("/", (req, res) => {
    s = req.query.id;
    if (user.id == s) res.write(JSON.stringify(s));
    else res.write("没有哦");
    res.end();
})
app.put("/", (req, res) => {
    id = req.query.id;
    email = req.query.email;
    username = req.query.username;
    password = req.query.password;
    var user1 = {
        "id": id,
        "email": eamil,
        "username": username,
        "password": password
    }
    res.write(JSON.stringify(user1));
    res.end();
})
app.delete("/", (req, res) => {
    id = req.query.id;
    if (user.id = id) res.write("do delete");
    res.end();
})
app.patch("/", (req, res) => {
    res.write(JSON.stringify(user));
    res.end();
})

app.listen(8000, () => {
    console.log("8000啦！！！")
})