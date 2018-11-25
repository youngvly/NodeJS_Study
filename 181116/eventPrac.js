//process : 노드 기본객체, eventemitter 상속하고있어서 on, emit 메소드 사용가능.
//on -> 이벤트 생성 (exit 이벤트, 이런 행동)
process.on('exit',function(){
    console.log('exit이벤트 발생');
});

// (이런행동(exit 이벤트 호출), 2초후에)
setTimeout(function(){
    console.log('2초 후에 시스템 종료 시도');

    process.exit();
},2000);   

/***********프로토타입 객체******* */
function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function(speed){
    console.log(speed + "km");
}

var person01 = new Person('this is name', 20);
console.log(person01.name );
person01.walk(10);
// person01.prototype.walk(20);

///**************계산기 객체**********//

var util = require('util');                             //상속 정의 위해서

//calc 객체
var Calc = function() {
    var self = this;

    //이벤트 등록
    this.on('stop',function() {
        console.log("객체 전달");
    });
};

//calc 객체가 eventemitter를 상속한다.
util.inherits(Calc,require('events').EventEmitter);

Calc.prototype.add = function(a,b){
    return a+b;
}

//다른 파일에서 불러올수있도록. (require('/calc.js')하면 calc객체를 받아올수있음.)
//module.exports = calc;
//module.exports.title = 'calculator';

var c = new Calc();
c.emit('stop');
//console.log(c.title + '에 stop이벤트 전달.');