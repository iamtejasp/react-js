import { useRef } from "react";
import { CustomInput } from "../utils-components/CustomInput";

const ForwardRef = () => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CustomInput
          type="text"
          ref={inputRef}
          style={{ border: "2px solid green" }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ForwardRef;
