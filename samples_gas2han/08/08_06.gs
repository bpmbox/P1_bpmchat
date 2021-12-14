function myFunction08_06_01() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const values = sheet.getDataRange().getValues();

  values.push(['Tom', 32, 'orange', 'ramen', 'programming']);
  console.log(values);

  values.splice(1, 1, ['Jay', 28, 'grape', 'sushi', 'shogi']);
  console.log(values);

  values.shift();
  console.log(values);

  sheet.clearContents();
  sheet.getRange(1, 1, values.length, values[0].length).setValues(values);
}

function myFunction08_06_02() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const values = sheet.getDataRange().getValues();
  
  const keys = sheet.getRange(1, 4, sheet.getLastRow()).getValues().flat();
  console.log(keys);

  const favorite = 'ramen';
  console.log(keys.includes(favorite));
  
  const row = keys.indexOf(favorite)
  console.log(row);
  
  const [name, age] = values[row];
  console.log(`${favorite}が好きなのは、${age}歳の${name}です。`);
}

function myFunction08_06_03() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const values = sheet.getDataRange().getValues();
  
  const favorite = 'ramen';
  const target = values.find(record => {
    const [name, age, favorite1, favorite2, favorite3] = record;
    return favorite2 === favorite;
  });  
  console.log(target);
  
  const [name, age] = target;
  console.log(`${favorite}が好きなのは、${age}歳の${name}です。`);
}

function myFunction08_06_04() {
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const values = ss.getActiveSheet().getDataRange().getValues();
  const header = values.shift();
  
  const targetValues = values.filter(record => {
    const [name, age, favorite1, favorite2, favorite3] = record;
    return age > 25;
  });
  
  targetValues.unshift(header);
  const targetSheet = ss.getSheetByName('出力シート');
  targetSheet.getRange(1, 1, targetValues.length, targetValues[0].length).setValues(targetValues);

}