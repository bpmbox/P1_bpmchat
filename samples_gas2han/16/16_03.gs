function myFunction16_03_01() {
  console.log(Session.getActiveUser().getEmail()); //現在のユーザーのメールアドレス
  console.log(Session.getEffectiveUser().getEmail()); //実行権限を持つユーザーのメールアドレス

  console.log(Session.getActiveUserLocale()); //ja
  console.log(Session.getScriptTimeZone()); //Asia/Tokyo
  console.log(Session.getTemporaryActiveUserKey());
}