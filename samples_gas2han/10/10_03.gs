function myFunction10_03_01() {
  const id = 'xxxxxxxx';
  const folder = DriveApp.getFolderById(id);

  console.log(folder.getId()); //フォルダID
  console.log(folder.getUrl()); //フォルダURL
  console.log(folder.getName()); //ドライブ用サンプル
  console.log(folder.getDescription()); //ドライブ用サンプルの説明

  console.log(folder.getDateCreated()); //Tue Jul 28 2020 14:35:26 GMT+0900 (日本標準時)
  console.log(folder.getLastUpdated()); //Tue Jul 28 2020 14:35:26 GMT+0900 (日本標準時)

  console.log(folder.isStarred()); //true
  console.log(folder.isTrashed()); //false
}

function myFunction10_03_02() {
  const id = 'xxxxxxxx';
  const folder = DriveApp.getFolderById(id);
  
  for (let i = 1; i <= 10; i++) {
    const name = String(i).padStart(2, '0');
    folder.createFolder(name);
  }
}

function myFunction10_03_03() {
  const id = '********'; //フォルダID
  const folder = DriveApp.getFolderById(id);
  
  const name = 'hello.txt';
  const content = 'Hello GAS!';
  folder.createFile(name, content, MimeType.PLAIN_TEXT);
  
  const targetId = '********'; //ファイルID
  folder.createShortcut(targetId);
}