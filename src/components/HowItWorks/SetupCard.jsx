import React from "react";

export default function SetupCard({ index, title, description, free, last }) {
  return (
    <div
      className={`mb-8 lg:mb-0 w-full lg:w-1/3 px-4 ${
        last ? "md:w-full" : "md:w-1/2"
      }`}
    >
      <div className="py-10 px-6 bg-light-tertiary dark:bg-dark-tertiary shadow-xl rounded text-center">
        <span
          className={`mb-6 w-16 h-16 inline-flex justify-center items-center  rounded text-2xl font-bold ${
            free ? "bg-blue-100 text-blue-600" : "bg-red-100 text-primary"
          }`}
        >
          {index}
        </span>
        <h3 className="text-light-title dark:text-white mb-4 text-2xl font-bold font-heading">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-dark-paragraph leading-loose">
          {description}
        </p>
      </div>
    </div>
  );
}
