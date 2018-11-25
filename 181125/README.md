# 회원가입 모듈 제작(Test)

## RDS에 테이블생성

## 모듈화하기

디렉토리 구조

./ <br/>
└----/node_modules<br/>
└----/routes              //라우터들을 개별저장. 조합은 index에서 할예정<br/>
    └--- **.js<br/>
└----/schema              //Schema(DBModel)저장<br/>
    └--- **.js <br/>
└----config.js           //설정 정보 저장<br/>
&emsp;&emsp;  - db port, url , id, pass<br/>
&emsp;&emsp;  - db_schema [{<br/>
&emsp;&emsp;&emsp;&emsp;                file : 스키마 파일 지정 ,               (.js는 생략)<br/>
&emsp;&emsp;&emsp;&emsp;                collection : DB컬렉션 이름지정 ,<br/>
&emsp;&emsp;&emsp;&emsp;                schemaName : 스키마 파일 부른 후 반환된 객체를 어떤 속성이름으로 할건지 ,<br/>
&emsp;&emsp;&emsp;&emsp;                modelName : 스키마에서 모델객체 만든 후 어떤 속성으로 할건지<br/>
&emsp;&emsp;&emsp;&emsp;                }]<br/>
&emsp;&emsp;    - route_info [{<br/>
&emsp;&emsp;&emsp;&emsp;                file : 라우팅 파일지정,<br/>
&emsp;&emsp;&emsp;&emsp;                path : 클라이언트로 부터 받은 요청 패스,<br/>
&emsp;&emsp;&emsp;&emsp;                method : 라우팅 파일 안에 만들어놓은 객체의 함수 이름<br/>
&emsp;&emsp;&emsp;&emsp;                type : get, post 등등<br/>
&emsp;&emsp;&emsp;&emsp;                }]<br/>

<hr/>

