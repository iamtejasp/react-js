import { createContext, useEffect, useState } from "react";

//* Create Context
export const ThemeContext = createContext();

//* Global provider component which we use to wrap component
const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((i) => !i);
  };

  useEffect(() => {
    document.body.style.background = isDarkMode ? "#333" : "#fff";
    document.body.style.color = !isDarkMode ? "#333" : "#fff";
  }, [isDarkMode]);

  return (
    //* Children is component which we provide context
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
