var express = require("express");
var router = express.Router();

router.post('/login', function(req, res) {
    var s1 = req.body.pwd;
    var s2 = req.body.pass;
    console.log(s1 + " " + s2);
    res.json({ 'mypwd': s1, 'mypass': s2});
});

router.post('/register', function(req, res) {
    var name = req.body.name;
    var pwd = req.body.pwd;
    var pass = req.body.pass;
    console.log(name + " " + pwd + " " + pass);
    res.json({ 'name': name,
               'pwd': pwd,
               'pass': pass});
})


module.exports = router;