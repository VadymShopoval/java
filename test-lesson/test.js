/* function sayName(name) {
  let  message ="My name is" + name;
  return message;
}
let arr = [5,-3,6,-5,0,-7,8,10];
let result = arr.reduce(function (sum, elem) {
  return sum + elem;
})

let assert = require('chai').assert;

describe('sayName', function () {
  it('получаем фразу с новым именем', function () {
    assert.typeOf(sayName('vadim'), 'string');
  });
});
describe('arr', function () {
  it('получаем сумму чисел массива', function () {
    // result=== 13
    assert.equal(result, 13);
  });
}); */
//html
describe('Таймер', function (){
  it('Возращает функция обьект?', function () {
    
    assert.typeOf(getTimeRemaining(), 'object');
  });
  it('Устанавливаем таймер обратного отсчета', function(){
    assert.typeOf(setClock("timer", deadline), 'string');
  });
});