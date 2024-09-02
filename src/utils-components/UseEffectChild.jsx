import { useEffect, useState } from "react";

const UseEffectChild = () => {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log("Every time call when component render");
  });

  useEffect(() => {
    console.log("This is call when component Mount");
  }, []);

  useEffect(() => {
    console.log("Call when name or age change");
  }, [name, age]);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    console.log("Call when component mount");

    return () => {
      console.log("Call when component Un-Mount");
    };
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      console.log(`My Name is ${name}`);
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setAge((a) => a - 1)}> - </button>
      {age}
      <button onClick={() => setAge((a) => a + 1)}> + </button>
      <br />
      <br />
      my name is {name} and my age is {age}
    </div>
  );
};

export default UseEffectChild;
