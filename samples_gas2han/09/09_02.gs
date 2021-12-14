function myFunction09_02_01() {
  console.log(GmailApp.getInboxUnreadCount()); //受信トレイの未読スレッドの数
  console.log(GmailApp.getStarredUnreadCount()); //スター付きの未読スレッドの数
  console.log(GmailApp.getSpamUnreadCount()); //迷惑メールの未読スレッドの数
}

function myFunction09_02_02() {
  const recipient = 'bob@example.com';
  const subject = 'サンプルメール';
  
  let body = '';
  body += 'サンプル様\n';
  body += '\n';
  body += 'このメールはサンプルメールとなります。\n';
  body += 'ご確認ください。';
  
  const options = {
    cc: 'tom@example.com, ivy@example.com',
    name: 'GASからの送信'  
  };
  
  GmailApp.sendEmail(recipient, subject, body, options);
}

function myFunction09_02_03() {
  const recipient = 'bob@example.com';
  const subject = 'サンプルメール';
  
  let body = '';
  body += 'サンプル様\n';
  body += '\n';
  body += 'このメールはサンプルメールとなります。\n';
  body += 'ご確認ください。';
  
  const options = {
    cc: 'tom@example.com, ivy@example.com',
    name: 'GASからの送信'  
  };
  
  GmailApp.createDraft(recipient, subject, body, options);
}