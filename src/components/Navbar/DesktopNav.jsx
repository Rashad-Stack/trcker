import React, { useContext } from "react";
import { Link, useMatch } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeProvider";
import { Button, ThemeToggle } from "../ui";

export default function DesktopNav() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <>
      <ul className="hidden md:flex items-center gap-5">
        <li className="text-gray-700 dark:text-dark-paragraph flex gap-4 items-center">
          <Link
            to="/"
            className={`font-semibold text-sm ${
              useMatch("/")
                ? "text-primary"
                : "text-gray-700 dark:text-dark-paragraph hover:text-gray-500 dark:hover:text-gray-400 "
            }`}
          >
            Start
          </Link>
          <svg
            className="w-4 h-4 current-fill"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </li>
        <li className="text-gray-700 dark:text-dark-paragraph flex gap-4 items-center">
          <Link
            to="/how-it-works"
            className={`font-semibold text-sm ${
              useMatch("/how-it-works")
                ? "text-primary"
                : "text-gray-700 dark:text-dark-paragraph hover:text-gray-500 dark:hover:text-gray-400 "
            }`}
            
          >
            How it works
          </Link>
          <svg
            className="w-4 h-4 current-fill"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </li>
        <li className="text-gray-700 dark:text-dark-paragraph flex gap-4 items-center">
          <Link
            to="/price"
            className={`font-semibold text-sm ${
              useMatch("/price")
                ? "text-primary"
                : "text-gray-700 dark:text-dark-paragraph hover:text-gray-500 dark:hover:text-gray-400 "
            }`}
            
          >
            Pricing
          </Link>
          <svg
            className="w-4 h-4 current-fill"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </li>
        <li className="text-gray-700 dark:text-dark-paragraph flex gap-4 items-center">
          <Link
            to="/contact"
            className={`font-semibold text-sm ${
              useMatch("/contact")
                ? "text-primary"
                : "text-gray-700 dark:text-dark-paragraph hover:text-gray-500 dark:hover:text-gray-400 "
            }`}
            
          >
            Contact us
          </Link>
        </li>
      </ul>
      <div className="hidden md:flex items-center gap-4">
        <div className="flex items-center gap-4">
          <Button title="Sign in" to="/login" />
          <Button title="Sign up" to="/register" colored />
        </div>
        <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
      </div>
    </>
  );
}
