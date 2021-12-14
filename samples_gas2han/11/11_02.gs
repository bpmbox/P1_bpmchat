function myFunction11_02_01() {
  const id = '********@group.calendar.google.com';
  const calendar = CalendarApp.getCalendarById(id);
  console.log(calendar.getName()); //指定したカレンダーのタイトル

  const defaultCalendar = CalendarApp.getDefaultCalendar();
  console.log(defaultCalendar.getName()); //デフォルトカレンダーのタイトル
}

function myFunction11_02_02() {
  const calendars = CalendarApp.getAllCalendars();
  
  for (const calendar of calendars) {
    console.log(calendar.getName());
  }
}

function myFunction11_02_03() {
  const name = 'テストカレンダー';
  const options = {
    timeZone: 'Asia/Tokyo',
    color: CalendarApp.Color.INDIGO
  };
  
  CalendarApp.createCalendar(name, options);
}
