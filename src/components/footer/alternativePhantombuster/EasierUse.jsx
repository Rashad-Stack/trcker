import React from "react";
import easierImg from "../../../assets/images/easySetup.svg";

export default function EasierUse() {
  return (
    <div className="w-full relative flex my-8 lg:my-28">
      <div className="hidden lg:absolute inset-y-0 left-0 -ml-6 lg:flex items-center">
        {" "}
      </div>{" "}
      <div className="w-full lg:w-4/5 lg:ml-auto lg:pl-8">
        <img
          className="max-w-full md:max-w-xl lg:max-w-full mx-auto relative object-cover rounded mb-16"
          src={easierImg}
          alt="easier image"
        />
        <div className="lg:hidden mt-12 text-center" />
        <div className="lg:absolute top-0 left-0 mt-12 lg:mt-20 max-w-xl mx-auto lg:mx-0 p-6 lg:py-24 rounded border-gray-50 shadow-xl text-center bg-light-tertiary dark:bg-dark-tertiary">
          <span className="font-bold text-gray-700 dark:text-dark-paragraph">Simple setup</span>
          <h2 className="text-4xl font-bold font-headin text-light-title dark:text-white">Easier to use</h2>
          <p className="max-w-xs mx-auto text-gray-700 dark:text-dark-paragraph leading-loose">
            You don't need to watch the tutorials to start using this tool. All
            you have to do is:{" "}
          </p>
          <ol className="text-gray-700 dark:text-dark-paragraph mt-4">
            {" "}
            <li className="text-gray-700 dark:text-dark-paragraph">1. copy the link to the Facebook group</li>
            <li className="text-gray-700 dark:text-dark-paragraph">2. add keywords and </li>
            <li className="text-gray-700 dark:text-dark-paragraph">3. wait for the results.</li>
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
