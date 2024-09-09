import { useState, useEffect, useMemo } from "react";

function UseMemoHooks() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const result = useMemo(() => {
    return slowFunc(number);
  }, [number]);

  const styleColors = useMemo(() => {
    return {
      background: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme changed");
  }, [styleColors]);

  return (
    <>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
          className="input"
        ></input>
        <h1>{number}</h1>
        <button
          onClick={() => {
            setDark((prevDark) => !prevDark);
          }}
        >
          Change Theme
        </button>
        <h1 style={styleColors}>{result}</h1>
      </div>
    </>
  );
}

export default UseMemoHooks;

function slowFunc(num) {
  console.log("Calculating");
  let result = num;
  for (let i = 0; i < 100000000; i++) {
    return (result += 1);
  }
}
