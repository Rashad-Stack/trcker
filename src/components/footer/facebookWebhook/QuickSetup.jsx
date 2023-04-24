import React from "react";
import { Link } from "react-router-dom";
import setting from "../../../assets/images/settings.png";

export default function QuickSetup() {
  return (
    <div className="w-full py-20">
      <div className="flex flex-wrap justify-between">
        <div className="mb-6 w-full lg:w-1/2">
          <h2 className="text-light-title dark:text-white my-2 text-3xl lg:text-4xl font-bold mb-4">
            Quick setup
          </h2>
          <ol style={{ "listStyle": "decimal" }}>
            <li className="text-gray-700 dark:text-dark-paragraph leading-loose">
              <Link className="text-primary font-bold" to="/register">
                Register
              </Link>
              your account
              <br />
              <br />
            </li>
            <li className="text-gray-500 leading-loose">
              <Link className="text-primary font-bold" to="/groups">
                Add
              </Link>
              Facebook groups
              <br />
              <br />
            </li>
            <li className="text-gray-500 leading-loose">
              <Link className="text-primary font-bold" to="/keywords">
                Add{" "}
              </Link>
              keywords
              <br />
              <br />
            </li>
            <li className="text-gray-500 leading-loose">
              Add your webhook url: <br />
              <Link className="text-primary font-bold" href="/settings">
                https://www.groupstracker.com/panel/settings
              </Link>
            </li>
          </ol>
        </div>
        <div className="w-full lg:w-1/2 px-6 h-80">
          <img
            className="h-full mx-auto object-cover rounded-lg"
            src={setting}
            alt="setting image"
          />
        </div>
      </div>
    </div>
  );
}
