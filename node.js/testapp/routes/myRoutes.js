
var express = require('express');
var router = express.Router();

router.get('/hello', function(req, res) {
    res.send("<h1>Hello Nodejs</h1>");
});

router.get('/getTest', function(req, res) {
    var n1 = parseInt(req.query.num1);
    var n2 = parseInt(req.query.num2);
    var sum = n1 + n2;
    res.json({'mySum': sum});
});

router.post('/postTest', function(req, res) {
    var n1 = parseInt(req.body.num1);
    var n2 = parseInt(req.body.num2);
    var sum = n1 + n2;
    res.json({'mySum': sum});
});

module.exports = router;