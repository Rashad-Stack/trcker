import React from "react";
import { Link } from "react-router-dom";

export default function FbGroups() {
  return (
    <div className="w-full flex flex-wrap items-center justify-center my-8 lg:my-16">
      <div className="w-full lg:w-auto mb-10 lg:mb-0 text-center lg:text-left">
        <h2 className="max-w-xl mx-auto lg:mx-0 mb-2 text-4xl lg:text-5xl font-bold font-heading text-light-title dark:text-white">
          Want to start tracking FB groups?
        </h2>
        <p className="max-w-xl mx-auto lg:mx-0 text-gray-700 dark:text-dark-paragraph leading-loose">
          No obligation. 1 group for free. No minimum fee.{" "}
        </p>
      </div>
      <div className="w-full lg:w-auto lg:ml-auto text-center">
        <Link
          className="inline-block py-2 px-6 bg-primary hover:bg-red-800 text-white font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200"
          to="/register"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
