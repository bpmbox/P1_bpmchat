function myFunction18_02_01() {
  const folderId = '********'; //保存先フォルダID
  const folder = DriveApp.getFolderById(folderId); //保存先フォルダID

  const query = 'has:attachment';
  const threads = GmailApp.search(query, 0, 1);
  const messages = threads[0].getMessages();
  
  for (const message of messages) {
    const attachments = message.getAttachments();

    for (const attachment of attachments) {
      const subject = message.getSubject();
      const name = attachment.getName();
      console.log(`Subject: ${subject}, Attachment: ${name}`);

      folder.createFile(attachment);
    }
  }
}

function myFunction18_02_02() {
  const folderId = '********'; //保存先フォルダID
  const folder = DriveApp.getFolderById(folderId); //保存先フォルダID
  const files = folder.getFiles();
  
  const attachments = [];
  while (files.hasNext()) attachments.push(files.next());    
      
  const recipient = 'bob@example.com'; //送信先
  const subject = '添付ファイルサンプル'; 
  let body = '';
  body += 'サンプル様\n';
  body += '\n';
  body += 'このメールは添付ファイルありのサンプルメールです。\n';
  body += 'ご確認ください。';

  GmailApp.sendEmail(recipient, subject, body, {attachments: attachments});
}
