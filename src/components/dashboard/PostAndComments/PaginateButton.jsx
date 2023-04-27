import React from "react";
import { Link } from "react-router-dom";

export default function PaginateButton({number,pagination, active }) {
  return (
    <button
      className={`inline-flex mr-3 items-center justify-center w-8 h-8 text-x rounded ${
        active
          ? "bg-primary text-white"
          : "border border-gray-300 dark:border-gray-700 bg-light-tertiary dark:bg-dark-tertiary text-gray-700 dark:text-dark-paragraph"
              }`}
          onClick={pagination}
    >
      {number}
    </button>
  );
}
