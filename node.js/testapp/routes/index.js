const { text } = require('express');
var express = require('express');
var test = require('../modules/test');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: test.multi(5, 6) });
});


module.exports = router;
