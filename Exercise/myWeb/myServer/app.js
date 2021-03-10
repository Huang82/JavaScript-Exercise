var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// // create database
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/account',{ uesNewUrlParser: true});

// // 測試database有沒有create success
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("connected!");
// });

// // 先建立儲存資料庫資料的結構
// var accountStruct = new mongoose.Schema({
//   name: String,
//   acc: String,
//   pass: String
// });

// accountStruct.set('collection', 'test');
// var accountModel = mongoose.model('test', accountStruct);

// var account1 = new accountModel({ name: "Huang", acc: "21118950", pass: "AS321654"});

// account1.save(function(err) {
//   if(err) console.log(err);

//   console.log("Success!!!");
// });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var login = require('./routes/loginRoutes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', login);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
