function myFunction20_02_01() {
  const scriptProperties = PropertiesService.getScriptProperties();
  console.log(scriptProperties.getProperties()); //{ '犬': 'わんわん', '猫': 'にゃあにゃあ', '狸': 'ぽんぽこ' }
}
