function myFunction08_03_01() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  console.log(ss.getId()); //スプレッドシートのID
  console.log(ss.getName()); //08章: サンプルスクリプト
  console.log(ss.getNumSheets()); //3
  console.log(ss.getUrl()); //スプレッドシートのURL
}

function myFunction08_03_02() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const sheet = ss.getSheetByName('シート1');
  console.log(sheet.getName()); //シート1

  const sheets = ss.getSheets();

  console.log(sheets[0].getName()); //シート1
  console.log(sheets[1].getName()); //シート2
}
