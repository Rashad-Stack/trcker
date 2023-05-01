import React from "react";
import PhantombusterLogoImg from "../../../assets/images/PhantombusterLogo.png";

export default function PhantombusterAbout() {
  return (
    <>
      <div className="flex flex-wrap items-center -mx-4 my-8 lg:my-28">
        <div className="mb-12 lg:mb-0 w-full lg:w-1/2 flex px-4">
          <div className="max-w-md">
            <span className="text-gray-700 dark:text-dark-paragraph font-bold">
              About Phantombuster
            </span>
            <h2 className="mb-6 text-4xl lg:text-4xl font-bold font-heading text-light-title dark:text-white">
              What is Phantombuster?
            </h2>
            <div className="mb-6 max-w-sm">
              <p className="text-gray-700 dark:text-dark-paragraph leading-loose">
                Phantombuster is an online service for scraping Facebook,
                Linkedin, Instagram, Twitter.
              </p>
              <p className="text-gray-700 dark:text-dark-paragraph leading-loose">
                It is a useful service, but it has two big problems: it is
                complicated and you risk getting banned on your own Facebook,
                Linkedin, Twitter account.
              </p>
            </div>
            <div className="flex flex-wrap"> </div>{" "}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mb-4">
            <div className="mb-4 lg:mb-0 w-full   px-3 bg-gray-100 h-64 flex  items-center justify-center">
              <img
                className="w-full m-2 ml-4  rounded"
                src={PhantombusterLogoImg}
                alt="PhantombusterLog image for this section"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-xl mx-auto text-center">
        <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading text-light-title dark:text-white">
          Why GroupsTracker.com is better?
        </h2>
      </div>
    </>
  );
}

// PhantombusterLogo.png
