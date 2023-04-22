import { useContext } from "react";
import Header from "./Header";
import { ThemeContext } from "../context/ThemeProvider";

export default function Main({ children }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`${isDarkMode ? "dark" : "light"}`}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
