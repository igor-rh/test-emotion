import Day from './Day';
import Year from './Year';
import Month from './Month';
import { MonthIndex } from './MonthName';
import getCalendar from '../utils/getCalendar';

const Calendar = () => {
  const calendar = getCalendar();

  return (
    <div css={{ fontFamily: 'Helvetica', fontSize: '14px' }}>
      {Object.values(calendar).map((year, i) => (
        <Year key={i}>
          {Object.values(year).map((days, month) => (
            <Month
              month={month as MonthIndex}
              firstWeekday={days[0].weekday}
              key={month}
            >
              {days.map((day) => (
                <Day {...day} key={day.date} />
              ))}
            </Month>
          ))}
        </Year>
      ))}
    </div>
  );
};

export default Calendar;
