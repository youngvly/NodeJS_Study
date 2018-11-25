
/******GET, POST로 넘어오는 값 확인 > Query, URI Parameter, *********** */

var express = require('express') , http = require('http'), path = require('path');
var bodyParser = require('body-parser'), static = require('serve-static');

var app = express();
//app.set('port',process.env.PORT || 3000);
app.set('port', 3000);

var router = express.Router();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(static(path.join(__dirname,'public')));             //index.html이 메인페이지로 들어감.

router.route('/hello').get(function(req,res){
    console.log('hi');

    res.writeHead('200',{'Content-Type':'text/html;charset = utf8'});
    res.write("<h2>hello Router work</h2>");
    res.end();
});


router.route('/signin/:name').get(function(req,res){                                 
    var paramName =  req.params.name;

    res.writeHead('200',{'Content-Type':'text/html;charset = utf8'});
    res.write("<h2></h2>");
    res.write(paramName);
    res.end();
    // console.log(__dirname);
    // res.sendFile(path.join(__dirname,'public',"signin.html"));
});
router.route('/signin').get(function(req,res){                 
    var paramName =  req.query.name;
    if (paramName != null)
        res.send(paramName);
    else 
        res.sendFile(path.join(__dirname,'public',"signin.html"));
});
router.route('/signin').post(function(req,res){                                     //모든 페이지 들어갈때마다 동작..???
    console.log('첫번째 미들웨어에서 요청을 처리함 ');

    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.pass || req.query.pass;

    res.writeHead('200',{'Content-Type':'text/html;charset = utf8'});
    res.write(paramId);
    res.write(paramPassword);
    
    res.write("<h2>hihi</h2>");
    res.end();
});
//등록되지 않은 패스에 대해 오류 응답
app.all('*',function(req,res){
    res.status(404).send('<h1>Error</h1>');
});





app.use('/',router);
http.createServer(app).listen(3000,function(){
    console.log("서버시작");
})



/*********질문 , 코드 41 : route에서 write와 send 외에 html파일로 그냥 연결시키려면 sendFile방법밖에 없나? ***** */