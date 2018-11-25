# Express js

```javascript
//시작
var app = express();
app.set('port', 3000);      //생략가능?
//끝
http.createServer(app).listen(3000,function(){
    console.log("서버시작");
});
```

### ● Router 
라우팅 하는 거
```javascript
//시작
var router = express.Router();
//사용
router.route('/product').get(function(req,res){
    console.log('product호출');
    if(req.session.user){
        res.sendFile('public/product.html');
    }else {
        res.sendFile('public/signin.html');
    }
});
//끝
app.use('/',router); 
```
<B>주의</B>
The *express.static* middleware is separate from *res.sendFile*
<b>사용</b> 
1. res.sendFile(path.join(__dirname, '../public', 'index1.html'));
2. res.sendFile('index1.html', { root: path.join(__dirname, '../public') });

<hr/>

##  1. RequestParamApp.js
<ul>
<li></li>
</ul>

##  2. sessionApp.js
<ul>
<li> express- session</li>

```javascript
//선언
var expressSession = require('express-session');

app.use(expressSession({
    secret : 'my key',
    resqve : true,
    saveUnintialized : true
}));
//사용
if(req.session.user){       //이미 로그인된 상태
        res.redirect('public/product.html');
    }else {                     //로그인 성공했다 가정, session 생성
        req.session.user = {
            id : pramID,
            name : 'username',
            authorized : true
        }
    };
```

<li> express-error-handler </li>

```javascript
//선언
var expressErrorHandler = require('express-error-handler');
//사용
var errorHandler = expressErrorHandler({
    static : {
        '404' : 'public/404.html'
    }
});
app.use(errorHandler);
```
</ul>

### 3. CookieParserApp.js

<li>cookie-parser</li>

```javascript
var cookieParser = require('cookie-parser');
app.use(cookieParser());

```