import React from "react";
import { Link } from "react-router-dom";

import setting from "../../../assets/images/settings.png";
import { Button } from "../../ui";

export default function GroupTrackerApi() {
  return (
    <div className="w-full py-20">
      <div className="mb-10 max-w-2xl mx-auto text-center">
        <div className="mt-2">
          <h2 className="text-light-title dark:text-white mb-6 text-4xl lg:text-5xl font-bold font-heading">
            GroupsTracker API for Facebook groups
          </h2>
        </div>
      </div>
      <div className="ml-2 lg:ml-8">
        <h3 className="text-light-title dark:text-white text-3xl lg:text-4xl font-bold my-2 ">
          Download facebook posts
        </h3>
        <p className="text-gray-700 dark:text-dark-paragraph">
          How to download all posts from Facebook group to .CSV (Excell) file or
          as a JSON data?
        </p>
        <h4 className="text-gray-700 dark:text-dark-paragraph text-2xl lg:text-3xl font-bold my-2">
          .CSV format
        </h4>
        <div className="flex flex-wrap -mx-6">
          <div className="w-full lg:w-1/2 px-6 text-gray-700 dark:text-dark-paragraph">
            Go to "Groups" section and click icon to download file
            <Link className=" text-primary font-bold" to="/groups">
              https://www.groupstracker.com/panel/groups
            </Link>
          </div>
          <div className="w-full lg:w-1/2 px-6 h-80">
            <img
              className="h-full mx-auto object-cover rounded-lg"
              src={setting}
              alt="setting image"
            />
          </div>
        </div>
        <h4 className="text-light-title dark:text-white text-2xl lg:text-3xl font-bold my-2">
          JSON format
        </h4>
        <div>
          <div className="flex flex-wrap ">
            <div
              className="w-full lg:w-1/4 text-gray-700 dark:text-dark-paragraph"
              style={{ lineHeight: "4rem" }}
            >
              Use endpoint:{" "}
            </div>
            <div className="w-full lg:w-3/4">
              <div className="lg:w-1/2 container mx-auto px-4 flex justify-evenly items-center">
                <Button title="Sign in" to="/login" big />
                <Button title="Sign Up" to="/register" colored big />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap ">
            <div
              className="w-full lg:w-1/4 text-gray-700 dark:text-dark-paragraph"
              style={{ lineHeight: "4rem" }}
            >
              Parameters:{" "}
            </div>
            <div className="w-full lg:w-3/4">
              {" "}
              <input
                className="m-2 block w-full font-bold p-3 bg-gray-50 outline-none"
                defaultValue="Facebook group ID"
              />
            </div>
          </div>
          <div className="flex flex-wrap ">
            <div
              className="w-full lg:w-1/4 text-gray-700 dark:text-dark-paragraph"
              style={{ lineHeight: "4rem" }}
            >
              Output data (.csv format):{" "}
            </div>
            <div className="w-full lg:w-3/4">
              {" "}
              <textarea
                className="m-2 block w-full p-3 text-gray-700 outline-none h-80"
                defaultValue={
                  '[\n  {\n    "IDPost": "...",\n    "Url": "...",\n    "ImgUrl": "...",\n    "PostAuthor": "...",\n    "Post": "...",\n    "Comments": "...",\n    "KeyWord": "..."\n    "DateAdd": "..."\n  }, {}, {}...\n]'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
