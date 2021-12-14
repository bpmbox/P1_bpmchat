function myFunction04_01_01() {
  if (5 < 10) {
    console.log('5 < 10 が成立していると出力されます');
  }
  if (10 < 5) {
    console.log('10 < 5 が成立していると出力されます');
  }
}

function myFunction04_01_02() { 
  const x = 5;
  if (x < 5) {
    console.log('xは5より小さい');
  } else {
    console.log('xは5以上');
  } 
}

function myFunction04_01_03() { 
  const x = 5;
  if (x < 5) {
    console.log('xは5より小さい');
  } else if (x < 10) {
    console.log('xは5以上で10より小さい');
  } else {
    console.log('xは10以上');
  }
}


