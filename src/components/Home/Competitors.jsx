import React from "react";
import success from "../../assets/images/success.svg"

export default function Competitors() {
  return (
    <section className="bg-light-secondary dark:bg-dark-secondary pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="mb-12 lg:mb-0 w-full lg:w-1/2 px-4">
            <div className="max-w-md">
              <span className="text-primary font-bold">
                Monitor facebook groups for keywords
              </span>
              <h2 className="text-black dark:text-white mb-6 text-4xl lg:text-5xl font-bold font-heading">
                Always before competitors
              </h2>
              <ul>
                <li className="flex mb-4">
                  <div>
                    <svg
                      className="mr-3 w-8 h-8 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <div className="max-w-xs">
                    <h3 className="text-black dark:text-white font-bold font-heading">Sell more</h3>
                    <p className="text-gray-500 leading-loose">
                      Find out immediately that someone is looking for the
                      services you offer.
                    </p>
                  </div>
                </li>
                <li className="flex mb-4">
                  <div>
                    <svg
                      className="mr-3 w-8 h-8 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <div className="max-w-xs">
                    <h3 className="text-black dark:text-white font-bold font-heading">
                      Track mentions about you
                    </h3>
                    <p className="text-gray-500 leading-loose">
                      Put out fires before they escalate.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div>
                    <svg
                      className="mr-3 w-8 h-8 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <div className="max-w-xs">
                    <h3 className="text-black dark:text-white font-bold font-heading">
                      Monitor your competitors
                    </h3>
                    <p className="text-gray-500 leading-loose">
                      Monitor your competitors&apos; activity and recommend your
                      services..
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
            <img
              src={success}
              alt="gain new clients from facebook groups"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
