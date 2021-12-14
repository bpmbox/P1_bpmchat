//サンプル5-1-1
//function sayHello() {
//  console.log('Hello!'); 
//}
//
//function sayGoodBye() {
//  console.log('Good bye.'); 
//}

//サンプル5-1-2
//function sayHello() {
//  console.log('Hello!'); 
//}
//
//function sayGoodBye() {
//  sayHello();
//  console.log('Good bye.'); 
//}

//サンプル5-1-3
//function sayHello_() {
//  console.log('Hello!'); 
//}
//
//function sayGoodBye() {
//  sayHello_();
//  console.log('Good bye.'); 
//}

//function myFunction05_01_04() {
//  console.log(`長方形の面積: ${calcArea_(3, 4)}`); //長方形の面積: 12
//}
//
//function calcArea_(x, y) {
//  return x * y;
//}

function myFunction05_01_05() {
  logNumbers_(1, 2, 3); //x: 1, y: 2
  logNumbers_(1); //x: 1, y: undefined
}

function logNumbers_(x, y) {
  console.log(`x: ${x}, y: ${y}`); 
}

function myFunction05_01_06() { 
  logMessage_('Bob', 'Good morning'); //Good morning, Bob.
  logMessage_('Tom'); //Hello, Tom.
}

function logMessage_(name, msg = 'Hello') {
  console.log(`${msg}, ${name}.`);
}

function myFunction05_01_07() {
  logMembers_('Bob', 'Tom', 'Ivy', 'Jay');
}

function logMembers_(first, second, ...members) {
  console.log(first, second);
  console.log(members);
}

function myFunction05_01_08() {
  const x = 10;
  console.log(`func1_(x)の値: ${func1_(x)}`); //func1_(x)の値: 11
  console.log(`xの値: ${x}`); //xの値: 10
}

function func1_(y) {
  y += 1;
  return y;
}

function myFunction05_01_09() {
  const x = [10, 20, 30];
  console.log(`func2_(x)の値: ${func2_(x)}`); //func2_(x)の値:11,20,30
  console.log(`xの値: ${x}`); //xの値:11,20,30
}

function func2_(y) {
  y[0] += 1;
  return y;
}

/**
 * 税込み価格を返す関数
 *
 * @param {Number} 価格
 * @param {Number} 税率（既定値は0.1）
 * @return {Number} 税込価格
 */
function includeTax(price, taxRate = 0.1) {
  return price * (1 + taxRate);
}
