import { useToggle } from "../custom-hooks/useToggle";
import { useInputValue } from "../custom-hooks/useInputValue";

const DarkMode = () => {
  const { text, onchange } = useInputValue("");
  const { value, toggle } = useToggle(false);

  return (
    <div
      style={{
        background: value ? " #000" : "#fff",
        color: value ? "#fff" : " #000",
      }}
    >
      <label>
        Name : <input type="text" value={text} onChange={onchange} />
      </label>

      <br />
      <br />
      <button onClick={toggle}>Toggle dark mode</button>
    </div>
  );
};

export default DarkMode;
