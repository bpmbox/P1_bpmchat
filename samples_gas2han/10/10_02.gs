function myFunction10_02_01() {
  const folderId = 'xxxxxxxx';
  const folder = DriveApp.getFolderById(folderId);

  console.log(folder.getName()); //ドライブ用サンプル

  const fileId = 'xxxxxxxx';
  const file = DriveApp.getFileById(fileId);

  console.log(file.getName()); //海.jpg
}

function myFunction10_02_02() {
  const root = DriveApp.getRootFolder();
  console.log(root.getName()); //マイドライブ
}

function myFunction10_02_03() {
  const folderName = '作成したフォルダ';
  DriveApp.createFolder(folderName);
    
  const fileName = '作成したファイル.txt';
  const content = 'Hello Drive!';
  DriveApp.createFile(fileName, content)  
}