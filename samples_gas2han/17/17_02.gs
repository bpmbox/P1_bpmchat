//サンプル17-2-1
function showAlert() {
  const ui = DocumentApp.getUi();
  const title = 'アラートダイアログの例';
  const prompt = 'いずれかのボタンを押してください';
  const response = ui.alert(title, prompt, ui.ButtonSet.YES_NO);
  
  switch (response) {
    case ui.Button.YES:
      console.log('"はい"が選択されました'); 
      break;
    case ui.Button.NO:
      console.log('"いいえ"が選択されました');
      break;      
    case ui.Button.CLOSE:
      console.log('閉じるボタンで閉じられました');
  }
}

//サンプル17-2-2
function showPrompt() {
  const ui = DocumentApp.getUi();
  const title = 'プロンプトダイアログの例';
  const prompt = '名前を入力してください';
  const response = ui.prompt(title, prompt, ui.ButtonSet.OK_CANCEL);
  const name = response.getResponseText();
  
  switch (response.getSelectedButton()) {
    case ui.Button.OK:
      console.log(`Hello ${name}!`);
      break;
    case ui.Button.CANCEL:
      console.log('名前を取得できませんでした');
      break;      
    case ui.Button.CLOSE:
      console.log('閉じるボタンで閉じられました');
  }
}