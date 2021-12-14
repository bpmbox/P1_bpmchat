function myFunction04_03_01() { 
  const rank = '優';
  switch (rank) {
    case '優':
      console.log('すごいですね');
      break;
    case '良':
      console.log('がんばりましたね');
      break;
    case '可':
      console.log('ギリギリでしたね');
      break;
    default:
      console.log('次がんばりましょう');
  }
}

function myFunction04_03_02() { 
  const rank = '優';
  switch (rank) {
    case '優':
      console.log('すごいですね');
    case '良':
      console.log('がんばりましたね');
    case '可':
      console.log('ギリギリでしたね');
    default:
      console.log('次がんばりましょう');
  }
}
