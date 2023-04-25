import  { useState,createContext } from "react";

export const ThemeContext = createContext();
export default function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
}
