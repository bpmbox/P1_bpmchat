function myFunction12_07_01() {
  const id = '********';
  const body = DocumentApp.openById(id).getBody();
  
  let str = body.getText();
  str = str.replace('{社名}', '株式会社プランノーツ');
  str = str.replace('{肩書}', '代表取締役');
  str = str.replace('{氏名}', '高橋宣成');

  body.setText(str);
  body.appendParagraph('はじめまして。');
}

function myFunction12_07_02() {
  const id = '********';
  const body = DocumentApp.openById(id).getBody();
  body.editAsText().setFontFamily('MS PMincho');

  const paragraph = body.getParagraphs()[0];
  paragraph.editAsText().setFontSize(16);
}
