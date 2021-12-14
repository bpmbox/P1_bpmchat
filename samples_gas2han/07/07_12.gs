function myFunction07_12_01() {
  const str = '字';
  console.log(encodeURI(str));
  console.log(encodeURIComponent(str));

  const uri = 'https://www.google.co.jp/search?q=字';
  console.log(encodeURI(uri));
  console.log(encodeURIComponent(uri));
}

