
var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var config = require('../config');

var pool = mysql.createPool({
    connectionLimit : 10,               //ConnectionPool에서 만들 수 있는 최대 연결개수 설정
    host : config.db_host,
    user : config.db_user,
    password : config.db_pass,
    database : config.db_name,
    debug : false                       //db처리과정을 로그로 남길건지
});

//db에 insert
var addUser = function(id,name,password,callback){
    console.log('addUser 호출');

    pool.getConnection(function(err,conn){
        if(err) {
            if (conn) conn.release;
            callback(err,null);
            return;
        }

        console.log('DB연결 ThreadID : ' + conn.threadId);
        var data = {id:id , password : password , name : name}

        //SQL EXEC
        var query ="INSERT INTO user set ?";
        var exec = conn.query(query,data,function(err,result){
            conn.release(); //필수
            console.log('실행SQL : ' + exec.sql);

            if(err){
                console.log('SQL실행 오류');
                console.dir(err);

                callback(err,null);     //커넥션끊고 함수종료

                return;
            }
            callback(null,result);
        });
    });
}
router.get(req,res,next){

}

module.exports(router);