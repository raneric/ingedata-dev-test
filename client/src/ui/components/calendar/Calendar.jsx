import { useState } from 'react';
import styles from './calendar.module.css';

import {
  subMonths,
  endOfMonth,
  startOfMonth,
  addMonths,
  isWithinInterval,
  isSameDay,
  isBefore,
  startOfDay
} from 'date-fns';

import { Button } from '../../core/Button';
import { monthList } from '../../../utils/appConstant';
import NotificationDialog from '../dialog/NotificationDialog';

const {
  calendar,
  header,
  daysOfWeek,
  daysGrid,
  dayOfWeek,
  day,
  daysOtherMonth,
  today,
  bookedDate,
  selectedDate,
  disableClick
} = styles

/**
 * A calendar component for selecting a range of dates.
 *
 * @param {Object[]} bookings An array of booking objects with checkInDate and checkOutDate properties.
 * @param {Function} onRangeChange A callback function that is called when the user selects a range of dates.
 * @param {boolean} isRangeSelectable A boolean indicating whether the calendar should allow selecting a range of dates.
 *
 * @returns {ReactElement} A React component representing the calendar.
 */
function Calendar({
  bookings,
  onRangeChange = () => { },
  isRangeSelectable = false }) {

  const [currentDate, setCurrentDate] = useState(new Date());

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const [showDialog, setShowDialog] = useState(false);

  const bookedDates = new Set();

  bookings.forEach(({ checkInDate, checkOutDate }) => {
    let current = new Date(checkInDate);
    const end = new Date(checkOutDate);

    while (current <= end) {
      bookedDates.add(current.toDateString());
      current.setDate(current.getDate() + 1);
    }
  })

  const daysOfWeekLabel = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const todayDate = new Date();

  /**
   * Click handler for the previous month button.
   *
   * Decrements the month of the calendar's current date by one month.
   */
  const prevMonthClickHandler = () => {
    setCurrentDate((currentDate) => subMonths(currentDate, 1));
  };

  /**
   * Click handler for the next month button.
   *
   * Increments the month of the calendar's current date by one month.
   */

  const nextMonthClickHandler = () => {
    setCurrentDate((currentDate) => addMonths(currentDate, 1));
  };


  /**
   * Closes the confirmation dialog.
   */
  const handleDialogClose = () => {
    setShowDialog(false)
  }

  /**
   * Click handler for a date in the calendar.
   *
   * If no date has been selected yet, sets the selected start and end dates to the
   * clicked date and calls the onRangeChange callback.
   *
   * If the clicked date is after the selected start date, checks if there are any
   * booked dates in the range. If there are, shows the confirmation dialog and does
   * not change the selected end date. If there are not, sets the selected end date to
   * the clicked date and calls the onRangeChange callback.
   *
   * @param {Date} clickedDate - The date that has been clicked.
   */
  const handleDateCellClick = (clickedDate) => {
    if (isBefore(startOfDay(clickedDate), startOfDay(todayDate))) return;

    if (!selectedStartDate) {
      setSelectedStartDate(clickedDate);
      setSelectedEndDate(clickedDate);
      onRangeChange?.(clickedDate, clickedDate, clickedDate);
    } else if (clickedDate >= selectedStartDate) {

      const start = selectedStartDate < clickedDate ? selectedStartDate : clickedDate;
      const end = selectedStartDate > clickedDate ? selectedStartDate : clickedDate;

      let current = new Date(start);
      let hasBooked = false;

      while (current <= end) {
        if (bookedDates.has(current.toDateString())) {
          hasBooked = true;
          break;
        }
        current.setDate(current.getDate() + 1);
      }

      if (hasBooked) {
        setShowDialog(true);
        return;
      }

      setSelectedEndDate(clickedDate);
      onRangeChange?.(selectedStartDate, clickedDate, clickedDate);
    }
  };

  /**
   * Returns a boolean indicating whether a given date is selected.
   *
   * A date is considered selected if it is the same day as the selected start date
   * or if it is within the range of the selected start and end dates.
   *
   * If the selected start date is null, the function returns false.
   * If the selected end date is null, the function returns true if the date is the
   * same day as the selected start date.
   *
   * @param {Date} date - The date to check.
   * @return {boolean} Whether the date is selected.
   */
  const isSelected = (date) => {
    if (!selectedStartDate || isBefore(startOfDay(date), startOfDay(todayDate))) return false;

    if (!selectedEndDate) {
      return isSameDay(startOfDay(date), startOfDay(selectedStartDate));
    }
    return isWithinInterval(date, {
      start: startOfDay(selectedStartDate),
      end: startOfDay(selectedEndDate)
    });

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
        const previousDay = lastDayOfPrevMonth.getDate() - i;
        const date = new Date(year, month - 1, previousDay);
        const isBooked = bookedDates.has(date.toDateString());
        days.push(
          <div
            key={`previous-month-${i}`}
            className={`${day} ${isBooked ? bookedDate : ''} ${isSelected(date) ? selectedDate : ''} ${(isBooked || !isRangeSelectable) ? disableClick : ''}`}
            onClick={(e) => {
              e.stopPropagation()
              handleDateCellClick(date);
            }}
          >
            {previousDay}
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
          className={`${day} ${isToday ? today : ''} ${isSelected(date) ? selectedDate : ''} ${isBooked ? bookedDate : ''}  ${(isBooked || !isRangeSelectable) ? disableClick : ''}`}
          onClick={(e) => {
            e.stopPropagation()
            handleDateCellClick(date);
          }}
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
        const date = new Date(year, month + 1, i);
        const isBooked = bookedDates.has(date.toDateString());
        days.push(
          <div
            key={`next-month-${i}`}
            className={`${day} ${isSelected(date) ? selectedDate : ''}  ${isBooked ? bookedDate : ''} ${daysOtherMonth} ${(isBooked || !isRangeSelectable) ? disableClick : ''}`}
            onClick={(e) => {
              e.stopPropagation()
              handleDateCellClick(date);
            }}
          >
            {i + 1}
          </div>
        );
      }
    }

    return days;
  };

  return (
    <>
      {showDialog && <NotificationDialog
        onClick={handleDialogClose}
        message="You can't select  dates with a booked date"
      />}

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
    </>
  );
}

export default Calendar;