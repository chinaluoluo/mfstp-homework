var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/index1', function(req, res, next) {
    res.render('index1');
});
router.get('/jsonp', function(req, res, next) {
    res.jsonp({ text: "hello" });
});
router.post('/json', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    var retu = req.body.username;
    if (retu == "mafengshe") res.json({ errno: 1, errmsg: "用户名已经存在", data: {} });
    res.json({ errno: 0, errmsg: "", data: {} });


});

module.exports = router;