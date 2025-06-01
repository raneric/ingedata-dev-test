import { useState } from 'react';
import styles from './calendar.module.css';

import {
  subMonths,
  endOfMonth,
  startOfMonth,
  addMonths
} from 'date-fns';

import { Button } from '../../core/Button';

const {
  calendar,
  header,
  daysOfWeek,
  daysGrid,
  dayOfWeek,
  day,
  daysOtherMonth,
  today,
  bookedDate
} = styles

function Calendar({ bookings }) {

  const [currentDate, setCurrentDate] = useState(new Date());

  const monthList = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const bookedDates = new Set();

  bookings.forEach(({ checkInDate, checkOutDate }) => {
    let current = new Date(checkInDate);
    const end = new Date(checkOutDate);

    while (current < end) {
      bookedDates.add(current.toDateString()); // Using readable format for comparison
      current.setDate(current.getDate() + 1);
    }
  })

  const daysOfWeekLabel = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const todayDate = new Date();

  const prevMonthClickHandler = () => {
    setCurrentDate((currentDate) => subMonths(currentDate, 1));
  };

  const nextMonthClickHandler = () => {
    setCurrentDate((currentDate) => addMonths(currentDate, 1));
  };

  /**
   * Generate the days of the month for the calendar, including days
   * from the previous and next month.
   *
   * @return {Array<ReactElement>} An array of React elements representing
   * the days of the month.
   */
  const generateCalendarDays = () => {
    const days = [];

    const previousMonth = subMonths(currentDate, 1);
    const lastDayOfPrevMonth = endOfMonth(previousMonth);
    const firstDayOfMonth = startOfMonth(currentDate).getDay();
    const totalDaysInCurrentMonth = endOfMonth(currentDate).getDate();
    const lastDayOfMonth = endOfMonth(currentDate);
    const nextMonthStartIndex = lastDayOfMonth.getDay() + 1;

    /**
     * If the first day of the month is not Sunday, add days from the
     * previous month to the beginning of the calendar.
     */
    if (firstDayOfMonth > 0 && firstDayOfMonth <= 6) {
      for (let i = lastDayOfPrevMonth.getDay(); i >= 0; i--) {
        const date = new Date(year, month, i);
        const isBooked = bookedDates.has(date.toDateString());
        days.push(
          <div
            key={`previous-month-${i}`}
            className={`${day} ${isBooked ? bookedDate : ''}`}
          >
            {lastDayOfPrevMonth.getDate() - i}
          </div>
        );
      }
    }

    /**
     * Add days from the current month to the calendar.
     */
    for (let i = 1; i <= totalDaysInCurrentMonth; i++) {
      const isToday =
        i === todayDate.getDate() &&
        month === todayDate.getMonth() &&
        year === todayDate.getFullYear();

      const date = new Date(year, month, i);
      const isBooked = bookedDates.has(date.toDateString());

      days.push(
        <div
          key={`current-month-${i}`}
          className={`${day} ${isBooked ? bookedDate : ''} ${isToday ? today : ''}`}
        >
          {i}
        </div>
      );
    }

    /**
     * If the last day of the month is not Saturday, add days from the
     * next month to the end of the calendar.
     */
    if (nextMonthStartIndex > 0 && nextMonthStartIndex <= 6) {
      for (let i = 0; i <= 6 - nextMonthStartIndex; i++) {
        const date = new Date(year, month, i);
        const isBooked = bookedDates.has(date.toDateString());
        days.push(
          <div
            key={`next-month-${i}`}
            className={`${day} ${isBooked ? bookedDate : ''} ${daysOtherMonth}`}
          >
            {i + 1}
          </div>
        );
      }
    }

    return days;
  };

  return (
    <div className={calendar}>
      <div className={header}>
        <Button onClick={prevMonthClickHandler}><span>&lt;</span></Button>
        <span>{monthList[month]} {year}</span>
        <Button onClick={nextMonthClickHandler}><span>&gt;</span></Button>
      </div>

      <div className={daysOfWeek}>
        {daysOfWeekLabel.map((day) => (
          <div key={day} className={dayOfWeek}>{day}</div>
        ))}
      </div>

      <div className={daysGrid}>{generateCalendarDays()}</div>
    </div>
  );
}

export default Calendar;