function myFunction10_06_01() {
  const email = '***@**********'; //メールアドレス
  
  const folderId = 'xxxxxxxx'; //フォルダID
  const folder = DriveApp.getFolderById(folderId);
  
  console.log(folder.getAccess(email).toString()); //指定したユーザーの権限
  console.log(folder.getOwner().getEmail()); //オーナーのメールアドレス
  console.log(folder.getEditors().length); //編集者の数
  console.log(folder.getViewers().length); //閲覧者の数
  console.log(folder.isShareableByEditors()); //TrueまたはFalse
  
  const fileid = 'xxxxxxxx'; //ファイルID
  const file = DriveApp.getFileById(fileid); 

  console.log(file.getAccess(email).toString()); //指定したユーザーの権限
  console.log(file.getOwner().getEmail()); //オーナーのメールアドレス
  console.log(file.getEditors().length); //編集者の数
  console.log(file.getViewers().length); //閲覧者の数
  console.log(file.isShareableByEditors()); //TrueまたはFalse
}

function myFunction10_06_02() {
  const email = '***@**********'; //メールアドレス

  const folderId = 'xxxxxxxx'; //フォルダID
  const folder = DriveApp.getFolderById(folderId);s
  folder.addEditor(email);
  
  const fileid = 'xxxxxxxx'; //ファイルID
  const file = DriveApp.getFileById(fileid);   
  file.addCommenter(email);
}

function myFunction10_06_03() {
  const email = '***@**********'; //メールアドレス

  const folderId = 'xxxxxxxx'; //フォルダID
  const folder = DriveApp.getFolderById(folderId);  
  folder.removeEditor(email);
  
  const fileid = 'xxxxxxxx'; //ファイルID
  const file = DriveApp.getFileById(fileid); 
  file.removeCommenter(email);
}

function myFunction10_06_04() { 
  const folderId = 'xxxxxxxx'; //フォルダID
  const folder = DriveApp.getFolderById(folderId);
  
  console.log(folder.getSharingAccess().toString()); //共有範囲
  console.log(folder.getSharingPermission().toString()); //権限
  
  const fileid = 'xxxxxxxx'; //ファイルID
  const file = DriveApp.getFileById(fileid); 

  console.log(file.getSharingAccess().toString()); //共有範囲
  console.log(file.getSharingPermission().toString()); //権限
}

function myFunction10_06_05() { 
  const folderId = 'xxxxxxxx'; //フォルダID
  const folder = DriveApp.getFolderById(folderId);
  folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.VIEW);
  
  const fileid = 'xxxxxxxx'; //ファイルID
  const file = DriveApp.getFileById(fileid); 
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.COMMENT);
}

function myFunction10_06_06() { 
  const folderId = 'xxxxxxxx'; //フォルダID
  const folder = DriveApp.getFolderById(folderId);
  folder.setSharing(DriveApp.Access.PRIVATE, DriveApp.Permission.VIEW);
  
  const fileid = 'xxxxxxxx'; //ファイルID
  const file = DriveApp.getFileById(fileid); 
  file.setSharing(DriveApp.Access.PRIVATE, DriveApp.Permission.COMMENT);
}