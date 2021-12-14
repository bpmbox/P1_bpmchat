function myFunction11_04_01() {
  const id = '********@group.calendar.google.com';
  const calendar = CalendarApp.getCalendarById(id);
  const date = new Date('2020/8/6');
  const event = calendar.getEventsForDay(date)[0];
  
  console.log(event.getTitle()); //銚子ポートタワー往訪
  console.log(event.getStartTime()); //Thu Aug 06 2020 17:00:00 GMT+0900 (日本標準時)
  console.log(event.getEndTime()); //Thu Aug 06 2020 19:00:00 GMT+0900 (日本標準時)
  console.log(event.getLocation()); //〒288-0001 千葉県銚子市川口町２丁目６３８５−２６７
  console.log(event.getDescription()); //夕日に間に合うように

  console.log(event.getId()); //イベントID
  console.log(event.isAllDayEvent()); //false
  console.log(event.isOwnedByMe()); //true

  console.log(event.getCreators()); //イベント作成者の配列
  console.log(event.getOriginalCalendarId()); //最初に作成されたカレンダーID
  console.log(event.getLastUpdated()); //Fri Jul 31 2020 12:03:59 GMT+0900 (日本標準時)
}

function myFunction11_04_02() { 
  const id = '********@group.calendar.google.com';
  const calendar = CalendarApp.getCalendarById(id);
  const date = new Date('2020/8/6');
  const event = calendar.getEventsForDay(date)[0];
  const iCalId = event.getId();
  
  const eventById = calendar.getEventById(iCalId);
  console.log(eventById.getTitle()); //銚子ポートタワー往訪
}

function myFunction11_04_03() {
  const id = '********@group.calendar.google.com';
  const calendar = CalendarApp.getCalendarById(id);
  
  const title = 'ランドマークタワー往訪';
  const startTime = new Date('2020/8/6 10:00');
  const endTime = new Date('2020/8/6 12:00');
  const options = {
    description: '横浜を一望',
    location: '〒220-0012 神奈川県横浜市西区みなとみらい２丁目２−１'
  };
  
  const event = calendar.createEvent(title, startTime, endTime, options);
  console.log(event.getColor()); //
  
  event.setColor(CalendarApp.EventColor.RED);
  console.log(event.getColor()); //11
}
