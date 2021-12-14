function myFunction04_02_01() { 
  const words1 = ['Google','Apps','Script'];
  const words2 = ['Google','Apps','Script'];
  console.log(words1 == words2); //false
  
  const personA = {name:'Bob'};
  const personB = {name:'Bob'};
  console.log(personA == personB); //false
}

function myFunction04_02_02() {  
  const words1 = ['Google','Apps','Script'];
  const words2 = words1;
  console.log(words1 == words2); //true
  
  const personA = {name:'Bob'};
  const personB = personA;
  console.log(personA == personB); //true
}

function myFunction04_02_03() { 
  console.log(5 == '5'); //true
  console.log(5 === '5'); //false
  
  console.log(5 != '5'); //false
  console.log(5 !== '5'); //true
}

function myFunction04_02_04() { 
  const x = 5, y = 10;
  if (x >= 5 && y >= 5 ) {
    console.log('xもyも5以上');
  }
  if (x >= 10 || y >= 10) {
    console.log('xかyのどちらかが10以上');
  }
  if (!(x >= 10)) {
    console.log('xは10以上ではない');
  }
}

function myFunction04_02_05() { 
  if (123) {
    console.log('123はtrue');
  }
  if ('abc') {
    console.log("'abc'はtrue");
  }
  if ([1, 2, 3]) {
    console.log('[1, 2, 3]はtrue');
  }
  if ({lunch: 'curry'}) {
    console.log("{lunch: 'curry'}はtrue");
  }
}

function myFunction04_02_06() { 
  if (!0) {
    console.log('0はfalse');
  }
  if (!'') {
    console.log('空文字はfalse');
  }
  if (!undefined) {
    console.log('undefinedはfalse');
  }
  if (!null) {
    console.log('nullはfalse');
  }
}


