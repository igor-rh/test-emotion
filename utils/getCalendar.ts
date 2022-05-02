type Day = {
  date: number;
  month: number;
  weekday: number;
};
type Month = Array<Day>;
type Year = Array<Month>;
type Calendar = Array<Year>;

const getCalendar = (): Calendar => {
  let day = new Date('2022-01-01 00:00:01');

  const lastYear = 2122;
  let calendar = {};
  while (day.getFullYear() <= lastYear) {
    const year = day.getFullYear();
    if (!calendar[year]) {
      calendar[year] = {};
    }
    if (!calendar[year][day.getMonth()]) {
      calendar[year][day.getMonth()] = [];
    }
    calendar[year][day.getMonth()].push({
      date: day.getDate(),
      month: day.getMonth(),
      weekday: day.getDay(),
    });
    day.setDate(day.getDate() + 1);
  }
  return calendar;
};

export default getCalendar;
