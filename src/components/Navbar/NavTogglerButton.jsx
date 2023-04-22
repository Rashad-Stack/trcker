import React from 'react'

export default function NavTogglerButton({onClick,isMenuOpen}) {
  return (
    <button
    className="block md:hidden"
    onClick={onClick}
  >
    <svg
      className="w-8 h-8 fill-current dark:text-gray-300 text-gray-700"
      viewBox="0 0 24 24"
    >
      <path
        className={`${isMenuOpen ? "hidden" : "block"}`}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"
      />
      <path
        className={`${isMenuOpen ? "block" : "hidden"}`}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 18h16v-2H4v2zm0-5h16v-2H4v2zm0-7h16v-2H4v2z"
      />
    </svg>
  </button>
  )
}
