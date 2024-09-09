import { useEffect, useRef, useState } from "react";

const UseRefHooks = () => {
  const [name, setName] = useState("");
  //* Pass the name
  // const nameIs = useRef("Name");
  // console.log(nameIs.current);

  // nameIs.current = "Tejas";
  // console.log(nameIs.current);

  //* Pass the function
  // useRef(() => "Hello");

  const inputRef = useRef();
  useEffect(() => {
    console.log(inputRef.current.value);
  });

  //* useEffect work after page render
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div>UseRefHooks</div>
      <label>
        Name:
        <input
          type="text"
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      {/* <button onClick={() => (nameIs.current = Math.random())}>
        change ref
      </button>
      <button onClick={() => console.log(nameIs.current)}>print ref</button> */}
    </>
  );
};

export default UseRefHooks;
