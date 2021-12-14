function myFunction17_03_01() {
  const ui = DocumentApp.getUi();
  
  ui.createMenu('ダイアログ')
    .addItem('アラート' ,'showAlert')
    .addSeparator()
    .addSubMenu(
      ui.createMenu('サブメニュー')
        .addItem('プロンプト', 'showPrompt')
    )
    .addToUi();
}
