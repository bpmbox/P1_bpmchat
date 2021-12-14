function myFunction12_05_01() {
  const id = '********'; //ドキュメントID
  const document = DocumentApp.openById(id);
  const body = document.getBody();

  const paragraph = body.getParagraphs()[0];
  console.log(paragraph.getText()); //AppSheetとは何か？そしてそれを学ぶメリットと注意すべきポイントは
  console.log(paragraph.getType().toString()); //PARAGRAPH
  console.log(paragraph.getParent().getType().toString()); //BODY_SECTION
  console.log(paragraph.getNumChildren()); //1

  console.log(paragraph.getAlignment().toString()); //JUSTIFY
  console.log(paragraph.getHeading().toString()); //Heading 1

  console.log(paragraph.getIndentStart()); //28.34645669291339
  console.log(paragraph.getIndentEnd()); //42.51968503937008
  console.log(paragraph.getIndentFirstLine()); //85.03937007874016
  console.log(paragraph.getLineSpacing()); //1.5

  const listItem1 = body.getListItems()[0];
  console.log(listItem1.getText()); //AppSheetとは
  console.log(listItem1.getType().toString()); //LIST_ITEM
  console.log(listItem1.getParent().getType().toString()); //BODY_SECTION
  console.log(listItem1.getNumChildren()); //1

  console.log(listItem1.getAlignment()); //null
  console.log(listItem1.getHeading().toString()); //HEADING2
  console.log(listItem1.getIndentStart()); //36
  console.log(listItem1.getIndentEnd()); //null
  console.log(listItem1.getIndentFirstLine()); //18
  console.log(listItem1.getLineSpacing()); //null

  console.log(listItem1.getGlyphType().toString()); //NUMBER
  console.log(listItem1.getNestingLevel()); //0
  console.log(listItem1.getListId()); //kix.wyo6j1mswvrk

  const listItem2 = body.getListItems()[1];
  console.log(listItem2.getText()); //ノーコードでアプリを作成できる
  console.log(listItem2.getGlyphType().toString()); //LATIN_LOWER
  console.log(listItem2.getNestingLevel()); //1
  console.log(listItem2.getListId()); //kix.wyo6j1mswvrk
}

function myFunction12_05_02() {
  const id = '********'; //ドキュメントID
  const document = DocumentApp.openById(id);
  const body = document.getBody();

  const paragraph1 = body.getParagraphs()[0];
  paragraph1.appendText('？？？');
  console.log(paragraph1.getNumChildren()); //2

  const paragraph2 = body.appendParagraph('AppSheetの特徴');
  paragraph2.setHeading(DocumentApp.ParagraphHeading.HEADING2);

  const listItem1 = body.getListItems()[0];
  const listItem2 = body.appendListItem('既存のデータソースと連携');
  listItem2.setListId(listItem1);
}
