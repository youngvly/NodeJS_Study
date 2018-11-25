
var url = require('url');
var querystring = require('querystring');

//url.parse : 스트링을 url객체로
var curURL = url.parse("https://hello.com/search?name=kim&age=22");
var curStr = url.format(curURL);

console.log(curStr);
console.log(curURL);
console.log(curURL.query + typeof(curURL.query) );

//querystring에 url객체의 query넣으면 파라미터 구별해줌
var param = querystring.parse(curURL.query);
console.log(param);
console.log(param.name);
console.log(param.age);
console.log(querystring.stringify(param));          //파라미터 객체를 다시 쿼리스트링으로



/***********콜백함수********** */
//비동기 프로그래밍을 위해서 파라미터로 함수전달. 이함수가 콜백함수. 
//콜백함수는 함수가 실행되는 중간에 호출되어 상태정보를 전달하거나 결과값을 처리하는데 사용된다.
function add(a,b,callback){
    var result = a+b;
    callback(result);

    var count = 0;
    var history = function(){
        return ++count + " : " + a + " + " + b + " = " + result;
    }
    return history;
};

var _history = add(10,10,function(result) {
    console.log("this is callback");
    console.log(result);
});


var _history2 = add(20,20,function(result) {
    console.log("this is callback");
    console.log(result);
});

console.log(_history());            //count = 1
console.log(_history());            //count = 2
console.log(_history());            //count = 3
console.log(_history2());            //count = 1
console.log(_history2());            //count = 2