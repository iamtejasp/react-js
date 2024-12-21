import { useState } from "react";
import DatePickerModel from "./DatePickerModel";
import { format } from "date-fns";

const DatePicker = ({ value, onChange }) => {
  const [toggleModel, setToggleModel] = useState(false);

  return (
    <div className="parent">
      <div className="date-picker-container">
        <button
          className="date-picker-button"
          onClick={() => setToggleModel((prev) => !prev)}
        >
          {value ? format(value, "dd-MM-yyyy") : "Select a date"}
        </button>
        {toggleModel ? (
          <DatePickerModel value={value} onChange={onChange} />
        ) : null}
      </div>
      <style>{`
      .parent{
        margin: 0;
        margin-top: 1rem;
        display: flex;
        justify-content: center;
      }

      .date-picker-container {
        position: relative;
        display: inline-block;
      }

      .date-picker-button {
        cursor: pointer;
      }
      `}</style>
    </div>
  );
};

export default DatePicker;
