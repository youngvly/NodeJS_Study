var calc = {}

calc.add = function (a,b){
    return a+b;
}
calc.multiply = function (a,b) {
    return a*b;
}

module.exports = calc;              //방법1 : calc객체에 함수 추가한뒤 calc객체 통채로 exports -> module.exports

