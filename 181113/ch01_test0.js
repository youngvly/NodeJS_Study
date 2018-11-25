console.log("안녕하세요");

var result = 0;

console.time('duration_sum');

for (var i = 0; i<10; i++){
    result += i;
}
console.timeEnd('duration_sum');        //자동으로  duration_sum : 경과시간 으로 출력됨.

console.log("filename : %s" , __filename)       //파일명 + 경로 출력 / 경로만 출력 : __dirname

console.log('argv 속성의 파라미터수 : ' + process.argv.length); //파라미터 출력
console.dir(process.argv);
process.argv.forEach(function(item,index) {                     //foreach, 익명함수로 파라미터 출력.
    console.log(index + " : " + item);
});

console.dir(process.env);                                   //환경변수 전체 출력
console.log("OS 환경변수의 값 : " + process.env['OS']);         //os환경변수 출력

/************************* */

var calc = require("./calc");
console.log(calc.add(1,2));         //calc 객체전체로 한번에 전달받은 함수들
var calc2 = require("./calc2");
console.log(calc2.sub(2,1));         //sub함수하나만 다로 전달받는거.

/**********외부모듈 이용 : npm install modulename ->  node_modules 폴더에 자동다운. 탐색
 *          var module1 = require("modulename");
 *          이후 사용하면됨.
 *         모듈 삭제 : npm uninstall
 * 
 *         모듈 자동다운 설정 (dependencies 와 비슷?)
 *         npm init          --> package.json 파일생성 
 *          npm install modulename --save    --> package.json에 module version까지 자동 저장됨
 *          npm install         --> node_modules 폴더 안들고다녀도 명령어입력하면 자동다운됨. 
 * ******** */

 var path = require('path');

 var directories = ["user","mike","hello.hwp"];
 var docsDirectory = directories.join(path.sep);        //join() : 여러개의 이름을 합쳐 하나의 파일패스로 만들어준다.
 console.log('문서 디렉터리 : %s',docsDirectory);

 var dirname = path.dirname(docsDirectory);             //디렉터리
 var basename = path.basename(docsDirectory);           //파일이름
 var extname = path.extname(docsDirectory);             //확장자

 console.log(dirname,basename,extname);

 /***********객체******* */

 var Person = {};
 Person['name'] = "Kim";
 Person['age'] = 20;
 Person.phone = '010-200-15123';                //객체에 속성넣는방법 2가지

 console.log(Person.name + Person['age'] + Person.phone);   //객체 속성 소환방법 2가지


 /*********배열***************** */

 var array = [{name : "이름" , age : 20},{name : "이름2",age : 30}];

 array.push(add = function(a,b){                //배열 뒤에 삽입
     return a+b;
 })

 array.forEach(function(item,index){                //foreach(item,index) 순서 주의
     console.log(index + " : " + item.name);
 })
 console.log(array[2](1,2));

array.splice(2,0,{name : "이름3" , age : 12});     //2번째자리에 0개를 삭제하고 객체 삽입
array.splice(3,1);                                 //3번째 자리에 1개 삭제
array.unshift({name : "이름0" , age : 11});         //맨앞에 삽입. 삭제는 shift
array.forEach(function(item,index){
    console.log(index + " : " + item.name);
});
