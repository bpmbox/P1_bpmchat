function myFunction09_03_01() {
  const threads = GmailApp.getInboxThreads(0, 3);  
  
  for (const thread of threads) {
    console.log(thread.getFirstMessageSubject());
  }
}

function myFunction09_03_02() {
  const threads = GmailApp.getInboxThreads(0, 1);
  const id = threads[0].getId();

  const thread = GmailApp.getThreadById(id);
  console.log(thread.getFirstMessageSubject()); //サンプルメール
}

function myFunction09_03_03() {
  const query = 'is:unread "お問い合わせフォームから送信されました"'
  const threads = GmailApp.search(query, 0, 10);
  
  for (const thread of threads) {
    console.log(thread.getFirstMessageSubject());
  }
}