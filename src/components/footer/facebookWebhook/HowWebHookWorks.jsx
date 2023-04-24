import React from "react";

export default function HowWebHookWorks() {
  return (
    <div className="w-full py-20">
      <h2 className="text-light-title dark:text-white mb-16 text-3xl lg:text-4xl font-bold font-heading">
        How webhook works?
      </h2>
      <div className="mb-8 flex items-start">
        <div className="mb-4 mr-6 py-4 px-6 rounded text-primary bg-red-50 font-bold">
          1
        </div>
        <div>
          <h3 className="text-light-title dark:text-white mb-4 text-xl lg:text-2xl font-bold">
            POST request
          </h3>
          <p className="text-gray-700 dark:text-dark-paragraph leading-loose">
            When GroupsTracker finds new post or comment your URL will be
            triggered as a POST request
          </p>
        </div>
      </div>
      <div className="mb-8 flex items-start">
        <div className="mb-4 mr-6 py-4 px-6 rounded text-primary bg-red-50 font-bold">
          2
        </div>
        <div>
          <h3 className="text-light-title dark:text-white mb-4 text-xl lg:text-2xl font-bold">
            Output data - JSON
          </h3>
          <div className="text-gray-700 dark:text-dark-paragraph">
            JSON format:
            <div className="ml-4">
              [
              <div className="ml-4">
                {"{"}
                <div className="ml-4">"groupID": "...",</div>
                <div className="ml-4">"postID": "...",</div>
                <div className="ml-4">"url": "...",</div>
                <div className="ml-4">"GroupsTracker": "...",</div>
                <div className="ml-4">"post": "...",</div>
                <div className="ml-4">"author": "...",</div>
                <div className="ml-4">"urlImg": "..."</div>
                {"}"},{"{"}
                {"}"},{"{"}
                {"}"}...
              </div>
              ]
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start">
        <div className="mb-4 mr-6 py-4 px-6 rounded text-primary bg-red-50 font-bold">
          3
        </div>
        <div>
          <h3 className="text-light-title dark:text-white mb-4 text-xl lg:text-2xl font-bold">
            Process data on your side
          </h3>
          <p className="text-gray-700 dark:text-dark-paragraph leading-loose">
            You can do anything with the data: Store in your database, sent it
            somewhere else, or use it in your system.
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
