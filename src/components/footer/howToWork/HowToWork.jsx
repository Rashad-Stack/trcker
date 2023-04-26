import React from "react";
import howToWorkImg from "../../../assets/images/chrome-plugin-facebook-posts-2.png";

export default function HowToWork() {
  return (
    <div className="w-full ml-2 lg:ml-8 lg:py-14 py-8">
      <div className="flex flex-wrap -mx-6">
        <div className="mb-6 w-full lg:w-1/2 px-6">
          <h2 className="my-2 text-3xl lg:text-4xl font-bold mb-4 text-light-title dark:text-white">
            How it works?
          </h2>
          <ul>
            <li className="text-gray-700 dark:text-dark-paragraph">
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
              GroupsTracker.com checks your groups every hour (it can be more
              often if you need to).
            </li>
            <li className="text-gray-700 dark:text-dark-paragraph">
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
              When a new post or comment is published with your keyword, you'll
              be notified by email, webhook or Slack.
            </li>
            <li className="text-gray-700 dark:text-dark-paragraph">
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
              You can easily monitor your brand on Facebook groups or generate
              leads for your business.
            </li>
            <li className="text-gray-700 dark:text-dark-paragraph">
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
              We don't need to know, share or store your password or any other
              sensitive information.
            </li>
            <li className="text-gray-700 dark:text-dark-paragraph">
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
              You can disable or remove the plugin at any time, and our service
              will no longer be able to track groups.
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 px-6 h-80">
          <img
            className="h-full mx-auto object-cover rounded-lg"
            src={howToWorkImg}
            alt="facebook group posts found by GroupsTracker.com Chrome plugin"
          />
        </div>
      </div>
    </div>
  );
}
