import React, { useContext } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import NavTogglerButton from "../Navbar/NavTogglerButton";
import { ThemeToggle } from "../ui";
import { ThemeContext } from "../../context/ThemeProvider";
export default function MobileAside({ isShown, setIsShown }) {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <nav className="lg:hidden py-6 px-6 border-b w-full">
      <div className="flex items-center justify-between">
        <Link className="text-2xl font-semibold" to="/panel">
          <img className="h-10" src={logo} alt="logo" width="auto" />
        </Link>
        <div className="flex gap-4">
          <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
          <NavTogglerButton
            onClick={() => setIsShown(!isShown)}
            isMenuOpen={isShown}
          />
        </div>
      </div>
    </nav>
  );
}
