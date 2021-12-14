
//GASプラグイン言葉によって処理を変更します
function test(val) {

  function didmount() {
  }

  function willmount() {
  }
  //harahetta       sssssssssssssssss
  function myFunction22_02_01() {
    const response = UrlFetchApp.fetch('https://tonari-it.com');
    console.log(response.getResponseCode()); //200

    const headers = response.getHeaders();
    for (const key in headers) console.log(key, headers[key]);
    
    return response.getContentText()
    console.log(response.getContentText());
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
    return myFunction22_02_01()
  }
}

