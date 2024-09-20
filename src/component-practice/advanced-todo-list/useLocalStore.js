import { useEffect, useState } from "react";

export const useLocalStore = (key, initialVal = []) => {
  const [value, setValue] = useState(() => {
    const localValue = JSON.parse(localStorage.getItem(key));
    if (!localValue) {
      return initialVal;
    } else {
      return localValue;
    }
  });

  useEffect(() => {
    if (value === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return { value, setValue };
};
