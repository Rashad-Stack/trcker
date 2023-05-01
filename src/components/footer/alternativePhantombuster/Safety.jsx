import React from "react";
import saftyImg from "../../../assets/images/safty.svg";

export default function Safety() {
  return (
    <div className="relative flex my-8 lg:my-28">
      <div className="hidden lg:absolute inset-y-0 left-0 -ml-6 lg:flex items-center">
        {" "}
      </div>{" "}
      <div className="w-full lg:w-4/5 lg:ml-auto lg:pl-8">
        <img
          className="max-w-full md:max-w-xl lg:max-w-full mx-auto relative object-cover rounded mb-16"
          src={saftyImg}
          alt="safry image"
        />
        <div className="lg:hidden mt-12 text-center" />
        <div className="lg:absolute top-0 left-0 mt-12 lg:mt-20 max-w-xl mx-auto lg:mx-0 p-6 lg:py-24 rounded border-gray-50 shadow-xl text-center bg-light-tertiary dark:bg-dark-tertiary">
          <span className="font-bold text-gray-700 dark:text-dark-paragraph">
            We don't need your private account
          </span>
          <h2 className="text-4xl font-bold font-heading text-light-title dark:text-white">Safety</h2>
          <p className="max-w-xs mx-auto text-gray-700 dark:text-dark-paragraph leading-loose">
            Our bot uses its own Facebook accounts, so we don't need yours (like
            Phantombuster).
            <br />
            There is no danger that you will be banned and you may lose your
            Facebook, Instagram, Linkedin account permanently while using
            Phantombuster.
          </p>{" "}
        </div>
      </div>
      <div className="hidden lg:absolute inset-y-0 right-0 -mr-8 lg:flex items-center">
        {" "}
      </div>{" "}
    </div>
  );
}
