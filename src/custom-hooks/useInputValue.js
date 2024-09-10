import { useState } from "react";

export const useInputValue = (initialValue) => {
  const [text, setText] = useState(initialValue);

  return {
    text,
    onchange: (e) => setText(e.target.value),
  };
};
