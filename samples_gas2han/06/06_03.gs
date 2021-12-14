function myFunction06_03_01() {

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log(`Hello! I'm ${this.name}!`);  
    }
    
    isAdult() {
      return this.age >= 18;
    }
  }

  const p = new Person('Bob', 25);
  p.greet(); //Hello! I'm Bob!
  console.log(p.isAdult()); //true
}

function myFunction06_03_02() {

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log(`Hello! I'm ${this.name}!`);  
    }
    
    isAdult() {
      return this.age >= 18;
    }
  }
  
  const p = new Person('Bob', 25);
  
  p.greet = function() {
    console.log(`Good Bye! I'm ${this.name}!`);
  };
  p.greet(); //Good Bye! I'm Bob!
  
  //ここにブレークポイントを置く

}