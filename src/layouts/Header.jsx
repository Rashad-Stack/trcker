import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { DesktopNav, MobileNav, NavTogglerButton } from "../components/Navbar";
import { ThemeToggle } from "../components/ui";
import { ThemeContext } from "../context/ThemeProvider";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-light-secondary dark:bg-dark-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="logo" className="w-14 md:w-16 p-3" />
        </Link>
        <DesktopNav />
        <MobileNav
          isMenuOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
          <NavTogglerButton
            isMenuOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>
    </nav>
  );
}
