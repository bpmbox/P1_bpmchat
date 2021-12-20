
/**
 * /GASプラグイン言葉によって処理を変更します
 * 検索内容の随時追加
 */
function test(val) {
const flowa = `
sequenceDiagram
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    John-->>-Alice: I feel great! https://jp
    John->>+test: aaaaaaa
    test->>-aaa: aaaa
`
     
 const aaaa = "VoteButton2"
 const react = `<div class="vote_button_container2"></div><script>eval(document.querySelectorAll('.vote_button_container2')
            .forEach(domContainer => {
                ReactDOM.render(
                    React.createElement(${aaaa}),
                    domContainer
                ); 
            }))</script>`
 //const ev = "eval(aaa)"
  
  //const react = '<script>${aaa}${ev}</script>'
  
  const reacta = `
  HTMLを表示
  <input></input>
  <input></input>
  <input></input>
  <input></input>
  <input></input>
  <input></input>
  `

  const flowchar = `
  classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
      +String beakColor
      +swim()
      +quack()
    }
    class Fish{
      -int sizeInFeet
      -canEat()
    }
    class Zebra{
      +bool is_wild
      +run()
    }
        class gas{
      +bool is_wild
      +run()
      -dimount()
      -willmont()
      -日本語()
    }          
  `

  function 業務登録() {
    return react;
  }

  function 業務フロー(){
    return `<a href="" target=_blunk>画面</a>`
  }
  
  function フローチャート(){
    return flowa
  }



  function getFromDataba() {
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

      dimount() {

      }

      willmount() {

      }
    }

  }

  function didmount() {
    return react;
  }

  function willmount() {
  }


  function firebace() {
    return "<a href='https://console.firebase.google.com/u/0/project/rpa999-56929/database/rpa999-56929/data' target=_blunk>firebase</a>"
  }

  function myFunction20_03_01() {
    const scriptProperties = PropertiesService.getScriptProperties();
    let count = scriptProperties.getProperty('COUNT');

    if (count) {
      count++;
      scriptProperties.setProperty('COUNT', count);
    } else {
      scriptProperties.setProperty('COUNT', 1);
    }
  }

  function myFunction20_03_02() {
    const scriptProperties = PropertiesService.getScriptProperties();
    scriptProperties.setProperties({ '猫': 'にゃーご', '馬': 'ひひーん' });

    const properties = scriptProperties.getProperties();
    for (const key in properties) console.log(key, properties[key]);
  }

  function myFunction20_03_03() {
    const userProperties = PropertiesService.getUserProperties();
    const spreadSheetId = userProperties.getProperty('SPREAD_SHEET_ID');

    if (spreadSheetId) {
      throw ('既にスプレッドシートが存在しています: ' + spreadSheetId);
    } else {
      const ssName = `スタッフ別(${Session.getActiveUser().getEmail()})`;
      const ss = SpreadsheetApp.create(ssName);
      userProperties.setProperty('SPREAD_SHEET_ID', ss.getId());
    }
  }
  const im = `
<div class="vote_button_container"></div><input></input><button></button>　/message/
          <script>
        document.querySelectorAll('.vote_button_container')
            .forEach(domContainer => {
                ReactDOM.render(
                    React.createElement(VoteButton),
                    domContainer
                );
            });
    </script>
          display

`
//Input Dsipy -> Dsip Aplication.script.画面(data:json)
//Disp -> AAAAAA
  function 画面() {
    //caluction function and return image with Dasta
    return im
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

  //harahetta       sssssssssssssssss
  function 日本語() {
    const response = UrlFetchApp.fetch('https://c7f1-35-229-138-207.ngrok.io/');
    console.log(response.getResponseCode()); //200

    const headers = response.getHeaders();
    for (const key in headers) console.log(key, headers[key]);

    return response.getContentText()
    console.log(response.getContentText());
  }

  function うんこ() {
    try {
      const activeDocument = DocumentApp.getActiveDocument();
      console.log(activeDocument.getName()); //ドキュメント名

      const url = 'https://docs.google.com/document/d/********/edit#'; //URL
      const documentByUrl = DocumentApp.openByUrl(url);
      console.log(documentByUrl.getName()); //ドキュメント名

      const id = '********'; //ドキュメントID
      const documentById = DocumentApp.openById(id);
      console.log(documentById.getName()); //ドキュメント名
    } catch (e) {
      return ("exec errorf 45 " + e)
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

    dimount() {

    }

    willmount() {

    }
  }
  // ret = eval(val+"()"")
  // new演算子で引数を渡してインスタンスを作成する
  try {
    ret = eval(val + "()")
    return ret
  } catch (e) {
    return "no function"
  }
  if (val == "日本語") {
    var hirachin = new Person("ひらちん", "オッス！")
    // メソッドを実行する
    return hirachin.greeting()
  }
  if (val === "うんこ") {
    return うんこ()
  }
  if (val === "おしっこ") {
    return おしっこ()
  }


}

