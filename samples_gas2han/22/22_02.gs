function myFunction22_02_01() {
  const response = UrlFetchApp.fetch('https://tonari-it.com');
  console.log(response.getResponseCode()); //200
  
  const headers = response.getHeaders();
  for (const key in headers) console.log(key, headers[key]);

  console.log(response.getContentText());
}
