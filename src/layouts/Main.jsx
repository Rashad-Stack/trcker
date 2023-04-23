import { useContext } from "react";
import Header from "./Header";
import { ThemeContext } from "../context/ThemeProvider";
import Footer from "./Footer";

export default function Main({ children }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`${isDarkMode ? "dark" : "light"}`}>
      <Header />
      <main className="min-h-max bg-light-secondary dark:bg-dark-secondary">
        {children}
      </main>
      <Footer/>
    </div>
  );
}
