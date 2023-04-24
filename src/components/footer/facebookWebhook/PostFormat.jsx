import React from "react";
import { Button } from "../../ui";

export default function PostFormat() {
  return (
    <div className="w-full py-20">
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
            <textarea className="m-2 block w-full p-3 bg-gray-50 outline-none h-80" defaultValue={"[\n  {\n    \"FacebookID\": \"...\",\n    \"Name\": \"...\",\n    \"Url\": \"...\",\n    \"Picture\": \"...\",\n    \"Description\": \"...\"\n  }, {}, {}...\n]"} />
          </div>
        </div>
      </div>
    </div>
  );
}
