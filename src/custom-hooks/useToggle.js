//here we cant use any jsx so we can use .js

import { useState } from "react";

export const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue((current) => !current);
  };

  return { value, toggle };
};
