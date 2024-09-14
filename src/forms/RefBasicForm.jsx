import { useRef, useState } from "react";
import { emailValidation, passWordValidation } from "./validation";

const RefBasicForm = () => {
  const email = useRef("");
  const password = useRef("");

  const [emailError, setEmailError] = useState([]);
  const [passwordError, setPasswordError] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValid = emailValidation(email.current.value);
    const passwordValid = passWordValidation(password.current.value);

    setEmailError(emailValid);
    setPasswordError(passwordValid);

    if (emailValid.length === 0 && passwordValid.length === 0) {
      alert("Success");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className={`form-group ${emailError.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input className="input" type="email" id="email" ref={email} />
        {emailError.length > 0 && (
          <div className="msg">{emailError.join(", ")}</div>
        )}
      </div>
      <div className={`form-group ${passwordError.length > 0 ? "error" : ""}`}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input className="input" type="password" id="password" ref={password} />
        {passwordError.length > 0 && (
          <div className="msg">{passwordError.join(", ")}</div>
        )}
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default RefBasicForm;
