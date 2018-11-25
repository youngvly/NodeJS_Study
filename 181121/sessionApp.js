var express = require('express') , http = require('http'), path = require('path');
var bodyParser = require('body-parser'), static = require('serve-static');
var expressErrorHandler = require('express-error-handler');

var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

var app = express();
app.set('port', 3000);

app.use(cookieParser());
app.use(expressSession({
    secret : 'my key',
    resqve : true,
    saveUnintialized : true
}));

var router = express.Router();

router.route('/product').get(function(req,res){
    console.log('product호출');
    if(req.session.user){
        res.sendFile('public/product.html');
    }else {
        res.sendFile('public/signin.html');
    }
});

var errorHandler = expressErrorHandler({
    static : {
        '404' : 'public/404.html'
    }
});

router.route('/login').post(function(req,res){
    console.log('login호출');

    //post로 넘어올 값
    var pramID = req.body.id;
    var pramPass = req.body.pass;

    if(req.session.user){       //이미 로그인된 상태
        res.redirect('public/product.html');
    }else {                     //로그인 성공했다 가정, session 생성
        req.session.user = {
            id : pramID,
            name : 'username',
            authorized : true
        }
    };

    res.writeHead('200',{'Content-Type' : 'text/html; charset = utf8'});
    res.write("<h1>로그인 성공</h1>");
    res.write("<br/><a href='public/product.html'>상품 페이지로 이동</a>");
    res.end();
});

// app.use(expressErrorHandler.httpError(404));         //이거있으니까 다 404로잡힘 ..?
app.use(errorHandler);

/*app.all('*',function(req,res){
    res.status(404);
});*/
app.use('/',router);
http.createServer(app).listen(3000,function(){
    console.log("서버시작");
})

