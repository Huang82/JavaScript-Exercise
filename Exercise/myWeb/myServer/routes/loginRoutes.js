var express = require("express");
var router = express.Router();

// account database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/account',{ uesNewUrlParser: true});

var accountList = new mongoose.Schema({
    id: Number,
    name: String,
    acc: String,
    pass: String
});

// 建立帳戶模組
accountList.set('collection', 'accountList');
var accountModel = mongoose.model('accountList', accountList);

// 登入
router.post('/login', function(req, res) {
    var s1 = req.body.acc;
    var s2 = req.body.pass;
    console.log(s1 + " " + s2);
    accountModel.find({acc: s1, pass: s2}, function(err, data) {
        if (err) {
            console.log(err);
        }

        // 找不到資料代表沒有此帳號密碼或者打錯了
        if (data.length == 0) {
            console.log("失敗");
            res.json({"mess": "您輸入的帳號密碼可能有誤"});
        } else {
            console.log("成功");
            res.json({"mess": "登入成功!"});
        }
    });
});

// 註冊
router.post('/register', function(req, res) {
    var name = req.body.name;
    var acc = req.body.acc;
    var pass = req.body.pass;
    console.log(name + " " + acc + " " + pass);

    // 創建資料庫帳戶物件
    var account = new accountModel({
        id: 1,
        name: name,
        acc: acc,
        pass: pass
    });

    account.save(function(err, data) {
        if(err) {
            res.json({"mess": "註冊失敗"});
        } else {
            res.json({'mess': "註冊成功!"});
        }
    });

});


module.exports = router;