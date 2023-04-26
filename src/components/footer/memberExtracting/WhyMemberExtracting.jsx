import React from "react";

export default function WhyMemberExtracting() {
  return (
    <div className="w-full ml-2 lg:ml-8 ">
      <div className="w-full ">
        <br />
        <h3 className="my-2 text-3xl lg:text-4xl font-bold mb-4 text-light-title dark:text-white">
          Why collect data of group members on facebook?
          <br />
        </h3>
      </div>
      <div className="max-w-2xl  ">
        <p className="  text-gray-700 dark:text-dark-paragraph">
          A list of Facebook group members can provide valuable information
          about your target audience, which can help you tailor your marketing
          or advertising efforts. It can help you connect with other people in
          the same industry or passion.
          <br />
          <br />
        </p>
        <ul>
          {" "}
          <li className="text-gray-700 dark:text-dark-paragraph font-bold">
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
            </svg>{" "}
            Building a marketing list
            <p className="font-normal text-gray-700 dark:text-dark-paragraph" style={{ "marginLeft": "2.5rem" }}>
              Having a list of users interested in a given topic helps in
              creating marketing lists, which can then be used to create
              precisely targeted ads
            </p>
          </li>
          <li className="text-gray-700 dark:text-dark-paragraph font-bold">
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
            </svg>{" "}
            Finding influencers
            <p className="font-normal text-gray-700 dark:text-dark-paragraph" style={{ "marginLeft": "2.5rem" }}>
              Identifying and reaching out to active and highly regarded group
              members is of great value. By establishing cooperation with them,
              we increase the chances that our marketing message will be
              successful.
            </p>
          </li>
          <li className="text-gray-700 dark:text-dark-paragraph font-bold">
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
            </svg>{" "}
            Acquiring users
            <p className="font-normal text-gray-700 dark:text-dark-paragraph" style={{ "marginLeft": "2.5rem" }}>
              When we run a group on Facebook, we often want to recruit members
              of other groups with similar content.
            </p>
          </li>
        </ul>
        <p />
      </div>
    </div>
  );
}
