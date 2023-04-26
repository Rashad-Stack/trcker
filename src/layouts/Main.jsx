import { useContext } from "react";
import Header from "./Header";
import { ThemeContext } from "../context/ThemeProvider";
import Footer from "./Footer";

export default function Main({ children, dasboard }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`${isDarkMode ? "dark" : "light"}`}>
      {!dasboard && <Header />}
      <main
        className={`bg-light-secondary dark:bg-dark-secondary ${
          dasboard ? "min-h-screen" : "min-h-max"
        }`}
      >
        {children}
      </main>
      {!dasboard && <Footer />}
    </div>
  );
}
