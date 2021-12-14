function myFunction13_02_01() {
  const activePresentation = SlidesApp.getActivePresentation();
  console.log(activePresentation.getName()); //プレゼンテーション名
  
  const url = 'https://docs.google.com/presentation/d/********/edit#'; //URL
  const presentationByUrl = SlidesApp.openByUrl(url);
  console.log(presentationByUrl.getName()); //プレゼンテーション名
  
  const id = '********'; //プレゼンテーションID
  const presentationById = SlidesApp.openById(id);
  console.log(presentationById.getName()); //プレゼンテーション名
}

