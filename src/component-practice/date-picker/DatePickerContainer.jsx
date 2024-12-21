import { useState } from "react";
import DatePicker from "./DatePicker";

const DatePickerContainer = () => {
  const [date, setDate] = useState();

  return (
    <>
      <DatePicker value={date} onChange={setDate} />
    </>
  );
};

export default DatePickerContainer;
