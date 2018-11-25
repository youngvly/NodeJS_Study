var express = require('express');
var bodyParser = require('body-parser');
var static = require('serve-static');
var expressErrorHandler = require('express-error-handler');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var mysql = require('mysql');

var app = express();
var router = express.Router();
app.use(static(path.join(__dirname,'public')));  
//start-end




//end
app.use('/',router);
http.createServer(app).listen(3000,function(){
    console.log("서버시작");
});
