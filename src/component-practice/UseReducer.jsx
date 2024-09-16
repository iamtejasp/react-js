import { useReducer } from "react";

const initialCount = 0;

const ACTIONS = {
  DECREMENT: "DECREMENT",
  INCREMENT: "INCREMENT",
  RESET: "RESET",
  ADD_VALUE: "ADD_VALUE",
};

const reducerFn = (count, action) => {
  switch (action.type) {
    case ACTIONS.DECREMENT:
      return count - 1;

    case ACTIONS.INCREMENT:
      return count + 1;

    case ACTIONS.RESET:
      return initialCount;

    case ACTIONS.ADD_VALUE:
      return count + action.payload.value;

    default:
      return count;
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducerFn, initialCount);

  return (
    <div>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
      {count}
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <br />
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
      <br />
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.ADD_VALUE,
            payload: {
              value: 5,
            },
          })
        }
      >
        +5
      </button>
    </div>
  );
};

export default UseReducer;
