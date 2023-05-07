import React from "react";

export default function TurnedOn() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <ul>
        <li className="py-6 lg:py-12 pr-4 text-gray-700 dark:text-dark-paragraph">
          <button className="w-full flex justify-between items-center text-left font-bold font-heading">
            <span className="text-xl">
              Does my computer have to be turned on?
            </span>
            <svg
              className="w-4 h-4 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
          <p className="mt-4 pr-4 text-gray-700 dark:text-dark-paragraph font-normal leading-loose">
            No, you can turn off the computer.
          </p>
          <p className="mt-4 pr-4 text-gray-700 dark:text-dark-paragraph font-normal leading-loose">
            All work is done on our servers and you will be notified when a new
            post or comment is posted.
          </p>
        </li>
      </ul>
    </div>
  );
}
