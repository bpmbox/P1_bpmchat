function myFunction12_04_01() {
  const id = '********'; //ドキュメントID
  const document = DocumentApp.openById(id);
  const body = document.getBody();
  
  console.log(body.getType().toString()); //BODY_SECTION
  console.log(body.getNumChildren()); //41

  console.log(body.getMarginTop()); //72
  console.log(body.getMarginBottom()); //72
  console.log(body.getMarginLeft()); //72
  console.log(body.getMarginRight()); //72
  console.log(body.getPageHeight()); //841.68
  console.log(body.getPageWidth()); //595.4399999999999

  const header = document.getHeader();
  console.log(header.getType().toString()); //HEADER_SECTION
  console.log(header.getNumChildren()); //2

  const footer = document.getFooter();
  console.log(footer.getType().toString()); // FOOTER_SECTION
  console.log(footer.getNumChildren()); //1
}

function myFunction12_04_02() {
  const id = '********'; //ドキュメントID
  const document = DocumentApp.openById(id);
  const body = document.getBody();

  const paragraphs = body.getParagraphs();
  for (const [i, paragraph] of paragraphs.entries()) {
    console.log(`${i}: ${paragraph.getType().toString()}\n${paragraph.getText()}`);
  }
  
  console.log();
  
  const listItems = body.getListItems();
  for (const [i, listitem] of listItems.entries()) {
    console.log(`${i}: ${listitem.getType().toString()}\n${listitem.getText()}`);
  }
}

function myFunction12_04_03() {
  const body = DocumentApp.create('新規ドキュメント[ボディに要素を追加]').getBody();

  body.appendParagraph('段落1');
  body.appendParagraph('段落2');
  body.appendHorizontalRule();
  body.appendParagraph('');
  body.appendListItem('リストアイテム1');
  body.appendListItem('リストアイテム2');
}
