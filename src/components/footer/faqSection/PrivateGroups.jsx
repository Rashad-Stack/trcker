import React from "react";
import { Link } from "react-router-dom";

export default function PrivateGroups() {
  return (
    <div className="w-full max-w-3xl mx-auto ">
      <ul>
        <li className=" py-12 pr-4 border-b text-gray-700 dark:text-dark-paragraph ">
          <button className="w-full flex justify-between items-center text-left font-bold font-heading">
            <span className="text-xl text-gray-700 dark:text-dark-paragraph">
              Is it possible to track private groups?
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
            Yes, you can monitor any public or private facebook group.
          </p>
          <p className="mt-4 pr-4 text-gray-700 dark:text-dark-paragraph font-normal leading-loose">
            GroupsTracker.com is best{" "}
            <Link className="text-primary" to="/">
              monitor facebook groups for keywords{" "}
            </Link>
            on market.
          </p>
        </li>
      </ul>
    </div>
  );
}
