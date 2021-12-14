function myFunction12_03_01() {
  const id = '********';
  const document = DocumentApp.openById(id);
  
  console.log(document.getName()); //ドキュメント名
  console.log(document.getId()); //ドキュメントID
  console.log(document.getUrl()); //ドキュメントのURL
  console.log(document.getLanguage()); //ja

  console.log(document.getBody().getType().toString()); //BODY_SECTION
  console.log(document.getHeader().getType().toString()); //HEADER_SECTION
  console.log(document.getFooter().getType().toString()); //FOOTER_SECTION
}

function myFunction12_03_02() {
  const document = DocumentApp.create('新規ドキュメント');

  document.addHeader().setText('ヘッダーセクション');
  document.addFooter().setText('フッターセクション');
}
