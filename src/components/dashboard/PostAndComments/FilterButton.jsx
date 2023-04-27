import React from "react";
import { Link } from "react-router-dom";

export default function FilterButton({ title, to, icon }) {
  return (
    <Link className="relative inline-block mr-2" to={to}>
      <span
        className="group block cursor-pointer text-red-400 hover:text-primary"
        style={{ marginRight: "148", marginTop: "5px" }}
        onclick="changeFav(this, 1);"
      >
        <span className="hidden group-hover:block absolute right-0 top-8 rounded shadow-xl bg-light-tertiary dark:bg-dark-tertiary text-xs text-gray-700 dark:text-dark-paragraph p-3">
          {title}
        </span>
        {icon}
      </span>
    </Link>
  );
}
