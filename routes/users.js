var express = require('express');
var router = express.Router();

/* 获取用户个人主页 */
router.get('/', function(req, res, next) {
    if (req.session.userID) {
        res.render('user', { 
            isLogin: true,
            userID: req.session.userID,
            avatar: req.session.avatar,
        });
    } else {
        res.render('user', { 
            isLogin: false,
            userID: 0,
            avatar: '',
        });
    };
});

// 用户登录
router.get('/login', function(req, res, next) {
    res.render('login', {});
});

// 用户注册
router.get('/register', function(req, res, next) {
    res.render('register', {});
});

module.exports = router;
