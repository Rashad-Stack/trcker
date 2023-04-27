import React from "react";
import memberExtractingWorksImg from "../../../assets/images/membersExtracting3.png";

export default function MemberExtractingHowWorks() {
  return (
    <div className="w-full ml-2 lg:ml-8">
      <div className="flex flex-wrap -mx-6">
        <div className="mb-6 w-full lg:w-1/2 px-6">
          <h2 className="my-2 text-3xl lg:text-4xl font-bold mb-4 text-light-title dark:text-white">
            How it works?
          </h2>
          <ul>
            <li className="text-gray-700 dark:text-dark-paragraph leading-loose">
              {" "}
              <svg
                className="ml-2 inline-block mr-2"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM14.2 8.3L9.4 13.1C9 13.5 8.4 13.5 8 13.1L5.8 10.9C5.4 10.5 5.4 9.9 5.8 9.5C6.2 9.1 6.8 9.1 7.2 9.5L8.7 11L12.8 6.9C13.2 6.5 13.8 6.5 14.2 6.9C14.6 7.3 14.6 7.9 14.2 8.3Z"
                  fill="#FADDDA"
                />
              </svg>
              GroupsTracker.com monitors and logs each new member joining the
              group
            </li>
            <li className="text-gray-700 dark:text-dark-paragraph leading-loose">
              {" "}
              <svg
                className="ml-2 inline-block mr-2"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM14.2 8.3L9.4 13.1C9 13.5 8.4 13.5 8 13.1L5.8 10.9C5.4 10.5 5.4 9.9 5.8 9.5C6.2 9.1 6.8 9.1 7.2 9.5L8.7 11L12.8 6.9C13.2 6.5 13.8 6.5 14.2 6.9C14.6 7.3 14.6 7.9 14.2 8.3Z"
                  fill="#FADDDA"
                />
              </svg>
              It is also able to download current members details such as:
              Facebook ID, name, description (download speed is around 2000 per
              day)
            </li>
            <li className="text-gray-700 dark:text-dark-paragraph leading-loose">
              {" "}
              <svg
                className="ml-2 inline-block mr-2"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM14.2 8.3L9.4 13.1C9 13.5 8.4 13.5 8 13.1L5.8 10.9C5.4 10.5 5.4 9.9 5.8 9.5C6.2 9.1 6.8 9.1 7.2 9.5L8.7 11L12.8 6.9C13.2 6.5 13.8 6.5 14.2 6.9C14.6 7.3 14.6 7.9 14.2 8.3Z"
                  fill="#FADDDA"
                />
              </svg>
              You can track each member's activity (posts, comments, likes)
            </li>
            <li className="text-gray-700 dark:text-dark-paragraph leading-loose">
              {" "}
              <svg
                className="ml-2 inline-block mr-2"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM14.2 8.3L9.4 13.1C9 13.5 8.4 13.5 8 13.1L5.8 10.9C5.4 10.5 5.4 9.9 5.8 9.5C6.2 9.1 6.8 9.1 7.2 9.5L8.7 11L12.8 6.9C13.2 6.5 13.8 6.5 14.2 6.9C14.6 7.3 14.6 7.9 14.2 8.3Z"
                  fill="#FADDDA"
                />
              </svg>
              You don't have to be an admin of the group, and what's more, you
              don't even have to be a member of it
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 px-6">
          <img
            className=" mx-auto  rounded-lg"
            src={memberExtractingWorksImg}
            alt="facebook groups members statistics"
          />
        </div>
      </div>
    </div>
  );
}
