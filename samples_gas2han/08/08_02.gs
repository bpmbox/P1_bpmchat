function myFunction08_02_01() {
  const ssActive = SpreadsheetApp.getActiveSpreadsheet();
  console.log(ssActive.getName()); //09章: サンプルスクリプト

  const url = 'https://docs.google.com/spreadsheets/d/xxxxxxxx/edit#gid=0';
  const ssByUrl = SpreadsheetApp.openByUrl(url);
  console.log(ssByUrl.getName()); //09章: サンプルスクリプト

  const id = 'xxxxxxxx';
  const ssById = SpreadsheetApp.openById(id);
  console.log(ssById.getName()); //09章: サンプルスクリプト
}

function myFunction08_02_02() {
  const sheet = SpreadsheetApp.getActiveSheet();
  console.log(sheet.getName()); //シート1
}

