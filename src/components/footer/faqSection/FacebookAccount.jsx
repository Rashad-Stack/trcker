import React from "react";

export default function FacebookAccount() {
  return (
    <div className="max-w-3xl mx-auto">
      <ul>
        <li className="py-6 lg:py-12 pr-4 border-b text-gray-700 dark:text-dark-paragraph">
          <button className="w-full flex justify-between items-center text-left font-bold font-heading">
            <span className="text-xl">
              Does GroupsTracker.com use my Facebook account?
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
            It's up you.{" "}
          </p>
          <p className="mt-4 pr-4 text-gray-700 dark:text-dark-paragraph font-normal leading-loose">
            If you want to start tracking groups immediately and already have
            access to them, we can use your account.
          </p>
          <p className="mt-4 pr-4 text-gray-700 dark:text-dark-paragraph font-normal leading-loose">
            If you are afraid to use your own account or want us to gain access
            to the group - we will use our own accounts.
          </p>
        </li>
      </ul>
    </div>
  );
}
