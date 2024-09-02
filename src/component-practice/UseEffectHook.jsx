import { useState } from "react";
import UseEffectChild from "../utils-components/UseEffectChild";

const UseEffectHook = () => {
  const [showChild, setShowChild] = useState(true);
  return (
    <>
      <button onClick={() => setShowChild((i) => !i)}>Show/Hide</button>
      <br />
      <br />
      {showChild ? <UseEffectChild /> : null}
    </>
  );
};

export default UseEffectHook;
