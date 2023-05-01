import React from "react";
import designedFbImg from "../../../assets/images/featuresPhantombuster.svg";

export default function DesignedFbGroup() {
  return (
    <div className="w-full relative flex">
      <div className="hidden lg:absolute inset-y-0 left-0 -ml-6 lg:flex items-center">
        {" "}
      </div>{" "}
      <div className="w-full lg:w-4/5 lg:mr-auto bg-white rounded lg:p-16 lg:pr-32">
        <img
          className=" max-w-full md:max-w-xl lg:max-w-full mx-auto relative object-cover rounded"
          src={designedFbImg}
          alt="designed image"
        />
        <div className="lg:hidden mt-12 text-center" />
        <div className="lg:absolute top-0 right-0 mt-12 lg:mt-20 max-w-xl mx-auto lg:mx-0 p-6 lg:py-24 rounded border-gray-50 shadow-xl text-center bg-light-tertiary dark:bg-dark-tertiary">
          <span className="font-bold text-gray-700 dark:text-dark-paragraph">More features</span>
          <h2 className="text-4xl font-bold font-heading text-light-title dark:text-white">
            Designed for Facebook <br />
            Groups
          </h2>
          <p className="max-w-xs mx-auto text-gray-700 dark:text-dark-paragraph leading-loose">
            Allowes you to:{" "}
          </p>
          <ol className="text-gray-700 dark:text-dark-paragraph mt-4">
            {" "}
            <li className="text-gray-700 dark:text-dark-paragraph">
              1. constant monitoring of <br />
              new posts, authors and <br />
              comments for your keywords
            </li>
            <li className="text-gray-700 dark:text-dark-paragraph">2. download all group members in CSV file </li>
            <li className="text-gray-700 dark:text-dark-paragraph">
              3. receive information about popular posts, <br />
              trends and the most active users
            </li>
          </ol>
          <p />{" "}
        </div>
      </div>
      <div className="hidden lg:absolute inset-y-0 right-0 -mr-8 lg:flex items-center">
        {" "}
      </div>{" "}
    </div>
  );
}

