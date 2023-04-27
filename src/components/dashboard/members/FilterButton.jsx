import React from "react";

export default function FilterButton({ title, filter, active, onClick }) {
  return (
    <button
      onClick={filter}
      className={`inline-block w-full md:w-1/2 lg:w-auto mb-4 lg:mb-0 px-4 pb-2 border-b-2 ${
        active
          ? "border-primary text-primary"
          : "text-gray-700 dark:text-dark-paragraph border-gray-700 dark:border-dark-paragraph "
      }`}
    >
      {title}
    </button>
  );
}
