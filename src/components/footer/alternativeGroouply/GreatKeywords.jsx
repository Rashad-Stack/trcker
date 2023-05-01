import React from "react";
import betterGroouplyImg from "../../../assets/images/betterGroouply.svg";

export default function GreatKeywords() {
  return (
    <div className="relative flex my-8 lg:my-16">
      <div className="hidden lg:absolute inset-y-0 left-0 -ml-6 lg:flex items-center">
        {" "}
      </div>{" "}
      <div className="w-full lg:w-4/5 lg:ml-auto lg:p-16 lg:pl-32 bg-white rounded ">
        <img
          className="max-w-full md:max-w-xl lg:max-w-full mx-auto relative object-cover rounded"
          src={betterGroouplyImg}
          alt="better quality then groouply.com"
        />
        <div className="lg:hidden mt-12 text-center" />
        <div className="lg:absolute top-0 left-0 mt-12 lg:mt-20 max-w-xl mx-auto lg:mx-0 p-6 lg:py-24 rounded  border-gray-50 shadow-xl text-center bg-light-tertiary dark:bg-dark-tertiary">
          <span className="font-bold text-gray-700 dark:text-dark-paragraph">Quality</span>
          <h2 className="text-4xl font-bold font-heading text-light-title dark:text-white">
            Great keywords monitor
          </h2>
          <br />
          <p className="max-w-xs mx-auto text-gray-700 dark:text-dark-paragraph leading-loose">
            Outstanding search alghoritms, fast notifications, monitoring posts,
            comments and authors.
            <br />
            Even our competitor probably found the site great, because he wanted
            to buy it back in full. Could there be a better recommendation?
            <br />
            <br />
            <span className="block text-left italic text-sm">
              Hello,
              <br />
              Just checking if you are selling GroupsTracker.com I'd like to
              acquire it. Can we get on a call?
              <br />
              Let me know if it's something you might be interested in.
              <br />
              Thanks, Mike <br />
              Mike Rubini (Groouply.com owner), 20.05.2022
            </span>
          </p>
          <p> </p>
        </div>
      </div>{" "}
    </div>
  );
}
