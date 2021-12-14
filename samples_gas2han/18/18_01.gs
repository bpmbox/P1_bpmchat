function myFunction18_01_01() {
  const folderId = '********'; //保存先フォルダID
  const fileId = '********'; //JPG画像のファイルID

  const folder = DriveApp.getFolderById(folderId);   
  const file = DriveApp.getFileById(fileId); 
  
  const sourceBlob = file.getBlob(); 
  console.log(sourceBlob.getName()); //海.jpg
  console.log(sourceBlob.getContentType()); //image/jpeg

  const targetBlob = file.getAs(MimeType.BMP); 
  console.log(targetBlob.getName()); //海.bmp
  console.log(targetBlob.getContentType()); //image/bmp

  folder.createFile(targetBlob); 
}

function myFunction18_01_02() {
  const folderId = '********'; //保存先フォルダID
  const folder = DriveApp.getFolderById(folderId); 
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const blob = ss.getBlob();
  
  console.log(blob.getContentType()); //application/pdf
  console.log(blob.getName()); //果物購入リスト.pdf
  console.log(blob.isGoogleType()); //false

  folder.createFile(blob); 
}

