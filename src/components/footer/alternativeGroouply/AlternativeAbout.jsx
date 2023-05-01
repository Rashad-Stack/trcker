import React from "react";
import groouplyLogoImg from "../../../assets/images/groouply-logo-w.png";

export default function AlternativeAbout() {
  return (
    <>
      <div className="w-full flex flex-wrap items-center my-8 lg:my-28 -mx-4">
        <div className="mb-12 lg:mb-0 w-full lg:w-1/2 flex px-4">
          <div className="max-w-md">
            <span className="text-gray-700 dark:text-dark-paragraph font-bold">
              About Groouply
            </span>
            <h2 className="mb-6 text-4xl lg:text-4xl font-bold font-heading text-light-title dark:text-white">
              What is Groouply?
            </h2>
            <div className="mb-6 max-w-sm">
              <p className="text-gray-700 dark:text-dark-paragraph leading-loose">
                Groouply is an online tool for monitoring Facebook groups.
              </p>
              <p className="text-gray-700 dark:text-dark-paragraph leading-loose">
                It's a good service, but this article shows there's something
                better and cheaper.
              </p>
            </div>
            <div className="flex flex-wrap"> </div>{" "}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mb-4">
            <div
              className="mb-4 lg:mb-0 w-full   px-3 bg-gray-100 h-64 flex  items-center justify-center"
              style={{ background: "#6946A0" }}
            >
              <img
                className="w-full m-2 ml-4  rounded"
                src={groouplyLogoImg}
                alt="groouply.com logo"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto mb-8 lg:mb-16 text-center">
        <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading text-light-title dark:text-white">
          Why GroupsTracker.com is better?
        </h2>
      </div>
    </>
  );
}
