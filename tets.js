
//GASプラグイン言葉によって処理を変更します
function test(val) {
  const react = `
  const a = 
  
  `

  function didmount() {
  }

  function willmount() {
  }


  function firebace(){
    return "<a href='https://console.firebase.google.com/u/0/project/rpa999-56929/database/rpa999-56929/data' target=_blunk>firebase</a>"
  }

  //harahetta       sssssssssssssssss
  function おしっこ() {
    const response = UrlFetchApp.fetch('https://tonari-it.com');
    console.log(response.getResponseCode()); //200

    const headers = response.getHeaders();
    for (const key in headers) console.log(key, headers[key]);
    
    return response.getContentText()
    console.log(response.getContentText());
  }

  function うんこ() {
    try{
    const activeDocument = DocumentApp.getActiveDocument();
    console.log(activeDocument.getName()); //ドキュメント名
  
    const url = 'https://docs.google.com/document/d/********/edit#'; //URL
    const documentByUrl = DocumentApp.openByUrl(url);
    console.log(documentByUrl.getName()); //ドキュメント名
  
    const id = '********'; //ドキュメントID
    const documentById = DocumentApp.openById(id);
    console.log(documentById.getName()); //ドキュメント名
    }catch(e){
      return(e)
    }
  }

  // Personクラスを定義する（引数付き）
  class Person {
    // プロパティを追加する
    constructor(name, greetingword) {
      this.name = name;
      this.greetingword = greetingword;
    }

    // メソッドを追加する
    greeting() {
      Logger.log(this.greetingword + val);
      return this.greetingword
    }
  }

  // new演算子で引数を渡してインスタンスを作成する
  if (val == "日本語") {
    var hirachin = new Person("ひらちん", "オッス！")
    // メソッドを実行する
    return hirachin.greeting()
  }
  if(val === "うんこ"){
    return うんこ()
  }
}

