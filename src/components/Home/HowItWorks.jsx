import React from "react";
import featuredImg from "../../assets/images/features.svg";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  return (
    <section className="bg-light-secondary dark:bg-dark-secondary py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className=" flex flex-wrap">
          <div className=" mb-10 lg:mb-0 w-full lg:w-1/2 lg:pr-6">
            <img
              className="relative rounded-lg lg:-ml-4"
              src={featuredImg}
              alt="how can you monitor Facebook groups"
            />
          </div>
          <div className="lg:pl-12 relative w-full lg:w-1/2">
            <div className="max-w-md">
              <span className="text-primary font-bold">Short presentation</span>
              <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading text-black dark:text-white">
                How it works?
              </h2>
              <div className="flex flex-wrap -mx-4">
                <div className=" flex  items-center  w-full  px-4">
                  <div className="mb-4  inline-block">
                    <span className=" w-12 h-12 flex justify-center items-center bg-red-100 rounded text-primary font-bold">
                      1
                    </span>
                  </div>
                  <div className="inline-block ml-2">
                    <h3 className=" text-black dark:text-white text-2xl font-bold font-heading">
                      {" "}
                      <Link
                        className="text-primary"
                        to="/register"
                        title="start monitoring facebook groups"
                      >
                        Sign up{" "}
                      </Link>
                      (for free)
                    </h3>
                    <p className="mb-4 text-gray-500  ">
                      It&apos;s free, easy and fast (takes 1 minute).
                    </p>
                  </div>
                </div>
                <div className=" flex  items-center  w-full  px-4">
                  <div className="mb-4  inline-block">
                    <span className=" w-12 h-12 flex justify-center items-center bg-red-100 rounded text-primary font-bold">
                      2
                    </span>
                  </div>
                  <div className="inline-block ml-2">
                    <h3 className="text-black dark:text-white text-2xl font-bold font-heading">
                      {" "}
                      <Link
                        className="text-primary"
                        to="/panel/groups"
                        title="start monitoring facebook groups"
                      >
                        Add{" "}
                      </Link>
                      Facebook groups
                    </h3>
                    <p className="mb-4 text-gray-500  ">
                      Add links to the groups you want to monitor.
                    </p>
                  </div>
                </div>
                <div className=" flex  items-center  w-full  px-4">
                  <div className="mb-4  inline-block">
                    <span className=" w-12 h-12 flex justify-center items-center bg-red-100 rounded text-primary font-bold">
                      3
                    </span>
                  </div>
                  <div className="inline-block ml-2">
                    <h3 className="text-black dark:text-white  text-2xl font-bold font-heading">
                      {" "}
                      <Link
                        className="text-primary"
                        to="/panel/keywords"
                        title="start monitoring facebook groups"
                      >
                        Add{" "}
                      </Link>
                      keywords
                    </h3>
                    <p className="mb-4 text-gray-500 ">
                      If only any of the keywords appear in post or comment, you
                      will be notified.
                    </p>
                  </div>
                </div>
                <div className=" flex  items-center  w-full  px-4">
                  <div className="mb-4  inline-block">
                    <span className=" w-12 h-12 flex justify-center items-center bg-red-100 rounded text-primary font-bold">
                      4
                    </span>
                  </div>
                  <div className="inline-block ml-2">
                    <h3 className="text-black dark:text-white  text-2xl font-bold font-heading">
                      That is all
                    </h3>
                    <p className="mb-4 text-gray-500 ">
                      You will be notified as soon as new post or comment appear
                      on the group.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
