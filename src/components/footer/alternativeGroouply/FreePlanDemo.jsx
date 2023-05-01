import React from "react";
import freePlanImg from "../../../assets/images/freePlan.svg";

export default function FreePlanDemo() {
  return (
    <div className="relative flex my-8 lg:my-28">
      <div className="hidden lg:absolute inset-y-0 left-0 -ml-6 lg:flex items-center">
        {" "}
      </div>{" "}
      <div className="w-full lg:w-4/5 lg:mr-auto bg-white rounded lg:p-16 lg:pr-32">
        <img
          className=" max-w-full md:max-w-xl lg:max-w-full mx-auto relative object-cover rounded"
          src={freePlanImg}
          alt="free plan & demo - facebook groups monitoring for keywords"
        />
        <div className="lg:hidden mt-12 text-center" />
        <div className="lg:absolute top-0 right-0 mt-12 lg:mt-20 max-w-xl mx-auto lg:mx-0 p-6 lg:py-24 rounded border-gray-50 shadow-xl text-center bg-light-tertiary dark:bg-dark-tertiary">
          <span className="font-bold text-gray-700 dark:text-dark-paragraph">For individuals</span>
          <h2 className="text-4xl font-bold font-heading text-light-title dark:text-white">
            Free plan &amp; demo
          </h2>
          <br />
          <p className="max-w-xs mx-auto text-gray-700 dark:text-dark-paragraph leading-loose">
            You can monitor 1 public group totally for free.
            <br />
            You can also test all features easily. You don't have to ask us or
            make any requests for demo. Just register and use.
          </p>{" "}
        </div>
      </div>
      <div className="hidden lg:absolute inset-y-0 right-0 -mr-8 lg:flex items-center">
        {" "}
      </div>{" "}
    </div>
  );
}


