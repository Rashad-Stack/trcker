import React from "react";

export default function Counter() {
  return (
    <section className="bg-light-tertiary dark:bg-dark-tertiary py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="py-4 flex flex-wrap items-center text-center rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="py-4 w-full md:w-1/2 lg:w-1/4 border-b md:border-b-0 lg:border-r border-gray-200 dark:border-gray-700">
            <h4 className="mb-2 text-gray-500  dark:text-gray-400">
              Groups tracked
            </h4>
            <span className="text-black dark:text-white text-3xl lg:text-4xl font-bold">
              1820
            </span>
          </div>
          <div className="py-4 w-full md:w-1/2 lg:w-1/4 border-b md:border-b-0 lg:border-r border-gray-200 dark:border-gray-700">
            <h4 className="mb-2 text-gray-500  dark:text-gray-400">
              Posts found
            </h4>
            <span className="text-black dark:text-white text-3xl lg:text-4xl font-bold">
              1532307
            </span>
          </div>
          <div className="py-4 w-full md:w-1/2 lg:w-1/4 border-b md:border-b-0 lg:border-r border-gray-200 dark:border-gray-700">
            <h4 className="mb-2 text-gray-500  dark:text-gray-400">
              Comments saved
            </h4>
            <span className="text-black dark:text-white text-3xl lg:text-4xl font-bold">
              6148458
            </span>
          </div>
          <div className="py-4 w-full md:w-1/2 lg:w-1/4">
            <h4 className="mb-2 text-gray-500 dark:text-gray-400">
              Notifications sent
            </h4>
            <span className="text-black dark:text-white text-3xl lg:text-4xl font-bold">
              201285
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
