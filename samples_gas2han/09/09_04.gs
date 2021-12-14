function myFunction09_04_01() {
  const query = 'subject:スレッドとメッセージを確認する';
  const threads = GmailApp.search(query, 0, 1);

  console.log(threads[0].getFirstMessageSubject()); //スレッドとメッセージを確認する
  console.log(threads[0].getId()); //スレッドID
  console.log(threads[0].getLastMessageDate()); //Fri Jul 24 2020 16:42:09 GMT+0900 (日本標準時)
  console.log(threads[0].getMessageCount()); //3
  console.log(threads[0].getPermalink()); //スレッドのパーマリンク
  console.log(threads[0].hasStarredMessages()); //false
  console.log(threads[0].isImportant()); //true
  console.log(threads[0].isInChats()); //false
  console.log(threads[0].isInInbox()); //true
  console.log(threads[0].isInSpam()); //false
  console.log(threads[0].isInTrash()); //false
  console.log(threads[0].isUnread()); //false
}

function myFunction09_04_02() {
  const query = 'subject:スレッドとメッセージを確認する';
  const threads = GmailApp.search(query, 0, 1);

  threads[0].markImportant();
  threads[0].markUnread();
  threads[0].moveToInbox();
}

function myFunction09_04_03() {
  const query = 'subject:スレッドとメッセージを確認する';
  const threads = GmailApp.search(query, 0, 1);

  GmailApp.markThreadsImportant(threads);
  GmailApp.markThreadsUnread(threads);
  GmailApp.moveThreadsToInbox(threads);
}
