function myFunction10_04_01() {
  const id = 'xxxxxxxx';
  const file = DriveApp.getFileById(id); 

  console.log(file.getId()); //ファイルID
  console.log(file.getName()); //海.jpg
  console.log(file.getDescription()); //海の写真
  console.log(file.getMimeType()); //image/jpeg
  console.log(file.getSize()); //1412243

  console.log(file.getUrl()); //ファイルを開くURL
  console.log(file.getDownloadUrl()); //ダウンロードURL

  console.log(file.getDateCreated()); //Wed Sep 27 2017 10:45:33 GMT+0900 (日本標準時)
  console.log(file.getLastUpdated()); //Tue Jul 28 2020 15:09:11 GMT+0900 (日本標準時)

  console.log(file.isStarred()); //false
  console.log(file.isTrashed()); //false  
}

function myFunction10_04_02() {  
  const id = '********'; //ファイルID
  const file = DriveApp.getFileById(id);
    
  const movedFile = file.makeCopy('海[コピーを別フォルダに移動].jpg');
  const destinationId = '********'; //移動先フォルダID
  const destination = DriveApp.getFolderById(destinationId);
  movedFile.moveTo(destination);
  
  const trashedFile = file.makeCopy('海[コピーをゴミ箱へ削除].jpg');
  trashedFile.setTrashed(true);  
}
