var fs = require('fs');

//동기식으로 파일 부르기
var data = fs.readFileSync('./eventPrac.js','utf-8');

//console.log(data);


//비동기식 파일부르기
// fs.readFile('./eventPrac.js' , 'utf-8',function(err,data){
//     console.log(data);          //한줄씩 불려짐.
// });

/***파일쓰기******** */
//out.txt파일에 hello
fs.writeFile('./out.txt','Hello',function(err){
    if(err){
        console.log(err);
    }
})


/****파일 열고 쓰기 ***/
//열고 내부익명함수에서 처리, open{write,close}
// fs.open('./out.txt','w',function(err,fd){
//     if (err) throw err;

//     var buf = new Buffer('안녕\n');
//     fs.write(fd,buf,0,buf.length,null,function(err,written,buffer){
//         if (err) throw err;

//         console.log(err,written,buffer);

//         fs.close(fd,function() {
//             console.log('파일닫기');
//         });
//     });
// });

fs.open('./out.txt','r',function(err,fd){
    if(err) throw err;

    var buf = new Buffer(10);
    console.log('버퍼타입 : %s', Buffer.isBuffer(buf));

    fs.read(fd,buf,0,buf.length,null,function(err,bytesRead,buffer){
        if (err) throw err;

        var inStr = buffer.toString('utf8',0,bytesRead);
        console.log('파일에서 읽어온 데이터 : %s',inStr);

        console.log(err,bytesRead,buffer);

        fs.close(fd,function() {
            console.log('파일닫기2');
        });
    });
});
