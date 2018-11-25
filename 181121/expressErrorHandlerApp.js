

var express = require('express') , http = require('http'), path = require('path');
var bodyParser = require('body-parser'), static = require('serve-static');
var expressErrorHandler = require('express-error-handler');

var app = express();

var errorHandler = expressErrorHandler({
    static : {
        '404' : './public/404.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

app.all('*',function(req,res){
    res.status(404);
});

http.createServer(app).listen(3000,function(){
    console.log("서버시작");
})

