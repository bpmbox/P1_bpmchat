function myFunction07_11_01() {  
  const obj = new Object();
  console.log(obj.toString()); //[object Object]
  console.log(obj.constructor); //[Function: Object]
  
  const person = {name: 'Bob', age: 25};
  console.log(person.toString()); //[object Object]
  console.log(obj.constructor); //[Function: Object]
  
  const number = 123;
  console.log(number.toString()); //123
  console.log(number.constructor); //[Function: Number]

  const d = new Date();
  console.log(d.toString()); //Tue Jul 21 2020 11:09:29 GMT+0900 (日本標準時)
  console.log(d.constructor); //[Function: Date]
  
  const array = [10, 30, 20, 40];
  console.log(array.toString()); //10,30,20,40
  console.log(array.constructor); //[Function: Array]
}

function myFunction07_11_02() {
  const person = {name: 'Bob', age: 25};
  
  Object.seal(person);
  person.name = 'Tom';
  person.favorite = 'banana';
  console.log(person); //{name: 'Tom', age: 25}
  
  Object.freeze(person);
  person.name = 'Ivy';
  person.favorite = 'orange';
  console.log(person); //{name: 'Tom', age: 25}
}

function myFunction07_11_03() {
  class Person {
    constructor (name, age){
      this.name = name;
      this.age = age;
      Object.freeze(this);
    }
  }

  const p = new Person('Bob', 25);
  p.name = 'Tom';
  p.favorite = 'banana';
  console.log(p); //{name: 'Bob', age: 25}
}