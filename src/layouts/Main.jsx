import { useContext } from "react";
import Header from "./Header";
import { ThemeContext } from "../context/ThemeProvider";

export default function Main({ children }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`${isDarkMode ? "dark" : "light"}`}>
      <Header />
      <main className="min-h-max bg-light-secondary dark:bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {children}
        </div>
      </main>
    </div>
  );
}
