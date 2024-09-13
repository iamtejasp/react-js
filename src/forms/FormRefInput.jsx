import { useRef } from "react";

const FormRefInput = () => {
  const nameRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;

    if (name === "") {
      alert("Please Enter Name");
      return;
    }

    console.log(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameRef} />
      <br />
      <button type="submit">submit</button>
    </form>
  );
};

export default FormRefInput;
