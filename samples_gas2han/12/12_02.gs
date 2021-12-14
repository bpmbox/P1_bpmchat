function myFunction12_02_01() {
  const activeDocument = DocumentApp.getActiveDocument();
  console.log(activeDocument.getName()); //ドキュメント名

  const url = 'https://docs.google.com/document/d/********/edit#'; //URL
  const documentByUrl = DocumentApp.openByUrl(url);
  console.log(documentByUrl.getName()); //ドキュメント名

  const id = '********'; //ドキュメントID
  const documentById = DocumentApp.openById(id);
  console.log(documentById.getName()); //ドキュメント名
}
