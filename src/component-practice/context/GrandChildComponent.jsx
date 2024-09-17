import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const GrandChildComponent = () => {
  //* Use the context using useContexct hook
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div>
      {" "}
      <button
        style={{
          background: isDarkMode ? "#fff" : "#333",
          color: isDarkMode ? "#333" : "#fff",
          border: "none",
          padding: ".5em",
          borderRadius: ".25em",
          cursor: "pointer",
        }}
        onClick={toggleDarkMode}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default GrandChildComponent;
