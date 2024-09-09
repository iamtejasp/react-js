import { useCallback, useEffect, useState } from "react";

const UseCallBackHooks = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);

  //* every time component re-render this function create new memory
  // function printValue() {
  //   console.log(name);
  // }

  //we can use useCallBack hooks
  // it will call when name change
  const printValue = useCallback(() => {
    console.log(name);
  }, [name]);

  //this use Effect call when every time age and name both change
  useEffect(() => {
    console.log("in Effect");
    printValue();
  }, [printValue]);

  return (
    <>
      name
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      age
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
    </>
  );
};

export default UseCallBackHooks;
