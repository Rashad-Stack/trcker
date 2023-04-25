import React from "react";
import { Link, useMatch } from "react-router-dom";

export default function DashBoardLink({ title, icon, to }) {
  return (
    <Link
      className={`flex items-center pl-3 py-3 pr-4  rounded  ${
        useMatch(to)
          ? "text-white bg-primary"
          : "text-gray-700 dark:text-dark-paragraph hover:bg-red-50 dark:hover:bg-gray-700"
      }`}
      to={to}
    >
      <span className="inline-block mr-3">{icon}</span>
      <span>{title}</span>
    </Link>
  );
}
