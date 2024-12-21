import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { useState } from "react";

const DatePickerModel = ({ value, onChange }) => {
  const [selectedMonth, setSelectedMonth] = useState(value || new Date());

  const visibleDates = eachDayOfInterval({
    start: startOfWeek(startOfMonth(selectedMonth)),
    end: endOfWeek(endOfMonth(selectedMonth)),
  });

  const handlePrevMonth = () => {
    setSelectedMonth((currentMonth) => {
      return addMonths(currentMonth, -1);
    });
  };

  const handelNextMonth = () => {
    setSelectedMonth((currentMonth) => {
      return addMonths(currentMonth, 1);
    });
  };

  return (
    <>
      <div className="date-picker">
        <div className="date-picker-header">
          <button
            className="prev-month-button month-button"
            onClick={handlePrevMonth}
          >
            &larr;
          </button>
          <div className="current-month">
            {format(selectedMonth, "MMMM - yyyy")}
          </div>
          <button
            className="next-month-button month-button"
            onClick={handelNextMonth}
          >
            &rarr;
          </button>
        </div>
        <div className="date-picker-grid-header date-picker-grid">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="date-picker-grid-dates date-picker-grid">
          {visibleDates.map((date) => {
            return (
              <button
                onClick={() => onChange(date)}
                className={`date ${
                  !isSameMonth(date, selectedMonth) &&
                  "date-picker-other-month-date"
                } ${isSameDay(date, value) && "selected"} ${
                  isToday(date) && "today"
                }`}
                key={date.toDateString()}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
      .date-picker {
        position: absolute;
        margin-top: 1rem;
        top: 100%;
        transform: translateX(-50%);
        left: 50%;
        padding: 0.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 20px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
        background-color: white;
      }

      .date-picker-header {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        font-size: 0.8rem;
        align-items: center;
      }

      .date-picker-grid {
        display: grid;
        gap: 0.5rem;
        grid-template-columns: repeat(7, 2rem);
        grid-auto-rows: 2rem;
      }

      .date-picker-grid > * {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }

      .date-picker-grid-header {
        font-weight: bold;
        font-size: 0.75rem;
        color: #333;
      }

      .date-picker-grid-dates {
        color: #555;
      }

      .date-picker-other-month-date {
        color: #aaa;
      }

      .date-picker-grid-dates > .date {
        cursor: pointer;
        border-radius: 0.25rem;
        border: none;
        background: none;
      }

      .date.today {
        border: 1px solid hsl(200, 100%, 50%);
      }

      .date-picker-grid-dates > *:hover {
        background-color: hsl(200, 100%, 80%);
        color: black;
      }

      .date.selected {
        background-color: hsl(200, 100%, 50%);
        color: white;
      }

      .month-button {
        background: none;
        border: none;
        cursor: pointer;
      }

      .month-button:hover {
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        border-radius: 0.5rem;
      }
      `}</style>
    </>
  );
};

export default DatePickerModel;
