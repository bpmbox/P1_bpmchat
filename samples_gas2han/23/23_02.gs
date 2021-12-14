//サンプル23-2-1
/** 人を表すクラス */
class Person {
  /**
   * Personオブジェクトを生成する
   * @param {string} 名前
   * @param {number} 年齢
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  /**
   * あいさつ文をログ出力する
   */
  greet(){
    console.log(`Hello! I'm ${this.name}!`);  
  }
}

/**
 * Personクラスのインスタンスを生成して返すファクトリ関数
 *
 * @param {number} 価格
 * @param {string} 税率（既定値は0.1）
 * @return {number} 税込価格
 */
function createPerson(name, age) {
  return new Person(name, age);
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

function myFunction23_02_02() {
  const p = MyLibrary.createPerson('Bob', 25); 
  console.log(p); //{ name: 'Bob', age: 25 }
  p.greet(); //Hello! I'm Bob!
  
  console.log(MyLibrary.includeTax(1000)); //1100
  console.log(MyLibrary.includeTax(1000, 0.08)); //1080
}