import React from "react";
import { Link } from "react-router-dom";

export default function HowDoesWork() {
  return (
    <div className="max-w-3xl mx-auto">
      <ul>
        <li className="py-12 pr-4 border-b text-gray-700 dark:text-dark-paragraph">
          <button className="w-full flex justify-between items-center text-left font-bold font-headin">
            <span className="text-xl">How does it work?</span>
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
            Six Simple Steps:
          </p>
          <ol
            className="mt-4 text-gray-700 dark:text-dark-paragraph text-sm font-normal leading-loose"
            style={{ listStyle: "decimal", margin: "1rem" }}
          >
            {" "}
            <li className="text-gray-700 dark:text-dark-paragraph">
              {" "}
              <Link className="font-bold text-primary" to="/register">
                Create an account
              </Link>
            </li>
            <li className="text-gray-700 dark:text-dark-paragraph">
              {" "}
              <Link className="text-primary font-bold" to="/panel/groups">
                Add link{" "}
              </Link>
              to facebook group you want to monitor
            </li>
            <li className="text-gray-700 dark:text-dark-paragraph">
              {" "}
              <Link className="font-bold text-primary" to="/panel/keywords">
                Add keywords{" "}
              </Link>
              that interests you and that is it.
            </li>
            <li className="text-gray-700 dark:text-dark-paragraph">
              Wait for our team to gain access to the Facebook Group. (Typically
              24-72 Hours)
            </li>
            <li className="text-gray-700 dark:text-dark-paragraph">
              Once our team gains access to the group, you will be notified of
              all new posts and comments that contain your keywords.
            </li>
          </ol>
          <p />
        </li>
      </ul>
    </div>
  );
}
