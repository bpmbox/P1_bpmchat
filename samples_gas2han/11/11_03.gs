function myFunction11_03_01() {
  const id = '********@group.calendar.google.com';
  const calendar = CalendarApp.getCalendarById(id);

  console.log(calendar.getName()); //サンプルカレンダー
  console.log(calendar.getId()); //カレンダーID
  console.log(calendar.getDescription()); //サンプル用のカレンダーです
  console.log(calendar.getTimeZone()); //Asia/Tokyo
  console.log(calendar.getColor()); //#7BD148

  console.log(calendar.isMyPrimaryCalendar()); //false
  console.log(calendar.isOwnedByMe()); //true

  console.log(calendar.isHidden()); //false
  console.log(calendar.isSelected()); //true
}

function myFunction11_03_02() {
  const id = '********@group.calendar.google.com';
  const calendar = CalendarApp.getCalendarById(id);

  const startDate = new Date('2020/8/3 10:30');
  const endDate = new Date('2020/8/7 14:00');
  const events = calendar.getEvents(startDate, endDate);
  
  for (const event of events) console.log(event.getTitle());  
}

function myFunction11_03_03() {
  const id = '********@group.calendar.google.com';
  const calendar = CalendarApp.getCalendarById(id);
  
  const date = new Date('2020/8/4');
  const options = {search: '打ち合わせ'};
  const events = calendar.getEventsForDay(date, options);

  for (const event of events) console.log(event.getTitle());
}

function myFunction11_03_04() {
  const id = '********@group.calendar.google.com';
  const calendar = CalendarApp.getCalendarById(id);
  
  const title = '銚子ポートタワー往訪';
  const startTime = new Date('2020/8/6 17:00');
  const endTime = new Date('2020/8/6 19:00');
  const options = {
    description: '夕日に間に合うように',
    location: '〒288-0001 千葉県銚子市川口町２丁目６３８５−２６７',
    guests: 'guest@example.com',
    sendInvites: true  
  };
  
  calendar.createEvent(title, startTime, endTime, options);
}
