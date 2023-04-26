import React from "react";
import { Link } from "react-router-dom";

export default function NavButton({ title, to, icon }) {
  return (
    <li className="group flex">
      <Link className="text-gray-700 dark:text-dark-paragraph" to={to}>
        <span className="text-gray-700 dark:text-dark-paragraph font-bold">
          {icon}
        </span>
      </Link>
      <span className="group-hover:opacity-100 transition-opacity bg-light-secondary dark:bg-dark-secondary px-1 text-sm text-gray-700 dark:text-dark-paragraph rounded-md absolute left-0 top-8 opacity-0 m-4 mx-auto border">
        {title}
      </span>
    </li>
  );
}
