function myFunction15_01_01() {
  const str = '文字列を簡単に翻訳することができます。';
  console.log(LanguageApp.translate(str, 'ja', 'en'));
  console.log(LanguageApp.translate(str, 'ja', 'zh-CN'));
  console.log(LanguageApp.translate(str, 'ja', 'es'));
}

function myFunction15_01_02() {
  const id = '********'; //ドキュメントID
  const sourceFile = DriveApp.getFileById(id);

  const title = LanguageApp.translate(sourceFile.getName(), 'ja', 'en');
  const createFile = sourceFile.makeCopy(title);

  const document = DocumentApp.openById(createFile.getId());
  translateParagraphs_(document.getBody().getParagraphs());
  translateParagraphs_(document.getHeader().getParagraphs());
}

function translateParagraphs_(paragraphs) {
  for (const paragraph of paragraphs) {
    const text = paragraph.getText();
    if (text) paragraph.setText(LanguageApp.translate(text, 'ja' ,'en')); 
  }
}
