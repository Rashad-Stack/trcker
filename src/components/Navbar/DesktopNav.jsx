import React, { useContext } from 'react'
import { Link, useMatch } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeProvider';
import { Button, ThemeToggle } from '../ui';

export default function DesktopNav() {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
      <>
                <ul className="hidden md:flex items-center gap-4">
        <li className="text-gray-300 flex gap-4 items-center">
          <Link

            to="/"
            className={useMatch("/")?"font-bold text-primary":"text-sm text-gray-400 hover:text-gray-500 font-semibold"}
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
        <li className="text-gray-300 flex gap-4 items-center">
          <Link

            to="/how-it-works"
            className={useMatch("/how-it-works")?"font-bold text-primary":"text-sm text-gray-400 hover:text-gray-500 font-semibold"}
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
        <li className="text-gray-300 flex gap-4 items-center">
          <Link

            to="/price"
            className={useMatch("/price")?"font-bold text-primary":"text-sm text-gray-400 hover:text-gray-500 font-semibold"}
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
        <li className="text-gray-300 flex gap-4 items-center">
          <Link

            to="/contact"
            className={useMatch("/contact")?"font-bold text-primary":"text-sm text-gray-400 hover:text-gray-500 font-semibold"}
          >
            Contact us
          </Link>
        </li>
      </ul>
      <div className="hidden md:flex items-center gap-4">
        <div className="flex items-center gap-4">
          <Button title="Sign in" onClick={() => null} />
          <Button title="Sign up" onClick={() => null} colored />
        </div>
        <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
        </div>
    </>
  )
}
