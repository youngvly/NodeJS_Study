# 회원가입 모듈 제작(Test)

## RDS에 테이블생성

## 모듈화하기

디렉토리 구조

./
└----/node_modules
└----/routes              //라우터들을 개별저장. 조합은 index에서 할예정
    └--- **.js
└----/schema              //Schema(DBModel)저장
    └--- **.js 
└----config.js           //설정 정보 저장
    - db port, url , id, pass
    - db_schema [{
                file : 스키마 파일 지정 ,               (.js는 생략)
                collection : DB컬렉션 이름지정 ,
                schemaName : 스키마 파일 부른 후 반환된 객체를 어떤 속성이름으로 할건지 ,
                modelName : 스키마에서 모델객체 만든 후 어떤 속성으로 할건지
                }]
    - route_info [{
                file : 라우팅 파일지정,
                path : 클라이언트로 부터 받은 요청 패스,
                method : 라우팅 파일 안에 만들어놓은 객체의 함수 이름
                type : get, post 등등
                }]

<hr/>

