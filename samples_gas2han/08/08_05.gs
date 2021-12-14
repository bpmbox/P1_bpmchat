function myFunction08_05_01() {
  const range = SpreadsheetApp.getActiveSheet().getRange('A2:E4');

  console.log(range.getA1Notation()); //A2:E4
  console.log(range.getRow()); //2
  console.log(range.getColumn()); //1
  console.log(range.getNumRows()); //3
  console.log(range.getNumColumns()); //5
  console.log(range.getLastRow()); //4
  console.log(range.getLastColumn()); //5
  
  console.log(range.isBlank()); //false
  console.log(range.isPartOfMerge()); //false
}

function myFunction08_05_02() {
  const sheet = SpreadsheetApp.getActiveSheet();

  console.log(sheet.getRange('A6').getValue());
  sheet.getRange('B6').setValue('GAS');

  console.log(sheet.getRange('A1:E2').getValues());
  
  const values = [
    ['Tom', 32, 'orange', 'ramen', 'programming'],
    ['Jay', 28, 'grape', 'sushi', 'shogi']
  ];
  sheet.getRange(3, 1, values.length, values[0].length).setValues(values);
}

function myFunction08_05_03() {
  const sheet = SpreadsheetApp.getActiveSheet();
  
  sheet.getRange('B5:D5').setFormulas([[
    '=SUM(B2:B4)',
    '=SUM(C2:C4)',
    '=SUM(D2:D4)'
  ]]);
  sheet.getRange('D2:D4').setFormulaR1C1('=RC[-2]*RC[-1]');
}

function myFunction08_05_04() {
  const sheet = SpreadsheetApp.getActiveSheet();
  sheet.clearFormats();

  //全体
  const rangeTable = sheet.getDataRange();
  rangeTable
    .setBorder(false, true, false, true, true, null)
    .setFontSize(14)
    .setFontFamily('メイリオ')
    .setNumberFormat('#,##0');

  //見出し
  const rangeHeader = sheet.getRange('A1:D1');
  rangeHeader
    .setBackgrounds([['yellow','yellow','yellow','orange']])
    .setHorizontalAlignment('center');

  //計
  const rangeTotal = sheet.getRange('A5:D5');
  rangeTotal.setFontWeight('bold');

  //品名
  const rangeItemName = sheet.getRange('A2:A5');
  rangeItemName.setFontColors([['red'],['orange'],['purple'],['glay']]);
}

function myFunction08_05_05() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const range = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn());

  range.sort([
    {column: 1, ascending: true},
    {column: 2, ascending: false}
  ]).removeDuplicates();
}
