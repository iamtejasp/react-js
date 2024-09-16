import { useEffect, useReducer } from "react";

const ACTIONS = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};

const reducerFn = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.FETCH_START:
      return {
        isLoading: true,
        isError: false,
      };

    case ACTIONS.FETCH_SUCCESS:
      return {
        data: payload.data,
        isLoading: false,
        isError: false,
      };

    case ACTIONS.FETCH_ERROR:
      return {
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export const useFetchReducer = (url, options = {}) => {
  const [state, dispatch] = useReducer(reducerFn, {
    isError: false,
    isLoading: true,
  });

  useEffect(() => {
    //* Initially call
    dispatch({ type: ACTIONS.FETCH_START });

    const controller = new AbortController();

    fetch(url, { signal: controller.signal, ...options })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }

        return Promise.reject(res);
      })
      .then((data) => {
        //* If it is data then
        dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: { data } });
      })
      .catch((e) => {
        if (e.name === "AbortError") return;

        dispatch({ type: ACTIONS.FETCH_ERROR });
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  return state;
};
