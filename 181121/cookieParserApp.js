
var express = require('express') , http = require('http'), path = require('path');
var bodyParser = require('body-parser'), static = require('serve-static');
var cookieParser = require('cookie-parser');

app.use(express.cookieParser());

var router = express.Router();

router.route('/showCookie').get(function(req,res){
    console.log('showCookie 호출됨');
    res.send(req.cookies);
});

router.route('/setCookie').get(function(req,res){
    console.log('setCookie 호출됨');
    res.cookie('user',{
        id: ' mike',
        name : 'name',
        authorized : true
    });

    res.redirect('/showCookie');
});



app.all('*',function(req,res){
    res.status(404).send('<h1>Error</h1>');
});
app.use('/',router);
http.createServer(app).listen(3000,function(){
    console.log("서버시작");
})

