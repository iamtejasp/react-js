import { useCallback, useState } from "react";

export const useArray = (initialArray = []) => {
  //* state
  const [array, setArray] = useState(initialArray);

  const push = useCallback((val) => {
    setArray((curr) => {
      return [...curr, val];
    });
  }, []);

  const replace = useCallback((i, newElement) => {
    setArray((curr) => {
      return [...curr.slice(0, i), newElement, ...curr.slice(i + 1)];
    });
  }, []);

  const filter = useCallback((callBack) => {
    setArray((curr) => {
      return curr.filter(callBack);
    });
  }, []);

  const remove = useCallback((i) => {
    setArray((curr) => {
      return [...curr.slice(0, i), ...curr.slice(i + 1)];
    });
  }, []);

  const reset = useCallback(() => {
    setArray(initialArray);
  }, [initialArray]);

  const clear = useCallback(() => {
    setArray([]);
  }, []);

  return { array, set: setArray, push, replace, filter, remove, reset, clear };
};
