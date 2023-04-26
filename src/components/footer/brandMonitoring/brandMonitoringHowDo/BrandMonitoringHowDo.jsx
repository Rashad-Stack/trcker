import React from "react";
import brandMonitoringHowDoImg from "../../../../assets/images/brandMonitoringHow2.png";
import { Link } from "react-router-dom";

export default function BrandMonitoringHowDo() {
  return (
    <div className="max-w-4xl ml-2 lg:ml-8">
      <div className="flex flex-wrap -mx-6">
        <div className="mb-6 w-full lg:w-1/2 px-6">
          <h2 className="my-2 text-3xl lg:text-4xl font-bold mb-4 text-light-title dark:text-white">
            How to do it?
          </h2>
          <ol>
            <li className="text-gray-700 dark:text-dark-paragraph">
              {" "}
              <svg
                className="ml-2 inline-block mr-2"
                viewBox="0 0 24 24"
                version="1.1"
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  id="rect185"
                  fill="none"
                  height={24}
                  width={24}
                  x={0}
                  y={0}
                  style={{ "strokeWidth": "0.078125" }}
                />
                <path
                  id="path187"
                  d="M 10,0.25 A 9.75,9.75 0 1 0 19.75,10 9.76875,9.76875 0 0 0 10,0.25 Z m 1.125,14.25 a 0.75,0.75 0 0 1 -1.5,0 V 7.271872 L 8.5375,8.003128 A 0.75146592,0.75146592 0 0 1 7.7125,6.746872 l 2.25,-1.5 A 0.778125,0.778125 0 0 1 10.731244,5.209432 0.75,0.75 0 0 1 11.125,5.87506 Z"
                  style={{ "strokeWidth": "0.078125" }}
                  fill="#FADDDA"
                />
              </svg>
              <Link
                className="text-pink-500 font-bold"
                to="https://www.groupstracker.com/register"
              >
                Register{" "}
              </Link>{" "}
              your GroupsTracker.com account
              <br />
              <div className="text-center">
                {" "}
                <Link
                  className="inline-block py-2 px-6 bg-pink-600 hover:bg-pink-700 text-white font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200"
                  to="https://www.groupstracker.com/register"
                >
                  Register
                </Link>
              </div>
            </li>
            <li className="text-gray-700 dark:text-dark-paragraph">
              {" "}
              <svg
                className="ml-2 inline-block mr-2"
                viewBox="0 0 24 24"
                version="1.1"
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  id="rect185"
                  fill="none"
                  height={24}
                  width={24}
                  x={0}
                  y={0}
                  style={{ "strokeWidth": "0.078125" }}
                />
                <path
                  id="path187"
                  d="M 10,0.25 A 9.75,9.75 0 1 0 19.75,10 9.76875,9.76875 0 0 0 10,0.25 Z m 2.25,13.5 a 0.75,0.75 0 0 1 0,1.5 H 7.75 A 0.684375,0.684375 0 0 1 7.515628,15.21256 0.75,0.75 0 0 1 7,14.5 0.703125,0.703125 0 0 1 7.159372,14.040628 L 11.256244,8.575 A 1.5,1.5 0 0 0 10,6.25 1.490625,1.490625 0 0 0 8.621872,7.168756 a 0.75398901,0.75398901 0 0 1 -1.3875,-0.590628 3,3 0 1 1 5.25,2.85 l -0.01872,0.02808 -3.215628,4.293744 z"
                  style={{ "strokeWidth": "0.078125" }}
                  fill="#FADDDA"
                />
              </svg>
              <Link
                className="text-pink-500 font-bold"
                to="https://www.groupstracker.com/panel/groups"
              >
                Add{" "}
              </Link>
              Facebook groups you want to track
              <br />
            </li>
            <li className="text-gray-700 dark:text-dark-paragraph">
              {" "}
              <svg
                className="ml-2 inline-block mr-2"
                viewBox="0 0 24 24"
                version="1.1"
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  id="rect185"
                  fill="none"
                  height={24}
                  width={24}
                  x={0}
                  y={0}
                  style={{ "strokeWidth": "0.078125" }}
                />
                <path
                  id="path187"
                  d="M 10,0.25 A 9.75,9.75 0 1 0 19.75,10 9.76875,9.76875 0 0 0 10,0.25 Z m 2.015628,14.390628 a 3.39375,3.39375 0 0 1 -4.781256,0 A 0.759375,0.759375 0 0 1 8.303128,13.571872 1.865625,1.865625 0 1 0 9.625,10.375 0.759375,0.759375 0 0 1 8.959372,9.971872 0.75,0.75 0 0 1 9.006292,9.193756 L 10.80628,6.625 H 7.75 a 0.75,0.75 0 0 1 0,-1.5 h 4.5 a 0.759375,0.759375 0 0 1 0.665628,0.403128 0.75,0.75 0 0 1 -0.04692,0.778128 l -1.978116,2.8125 a 3.553125,3.553125 0 0 1 1.125,0.740616 3.39375,3.39375 0 0 1 0,4.781256 z"
                  style={{ "strokeWidth": "0.078125" }}
                  fill="#FADDDA"
                />
              </svg>
              <Link
                className="text-pink-500 font-bold"
                to="https://www.groupstracker.com/panel/keywords"
              >
                Add{" "}
              </Link>
              keywords to monitor
              <br />
            </li>
            <li className="text-gray-700 dark:text-dark-paragraph">
              {" "}
              <svg
                className="ml-2 inline-block mr-2"
                viewBox="0 0 24 24"
                version="1.1"
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  id="rect185"
                  fill="none"
                  height={24}
                  width={24}
                  x={0}
                  y={0}
                  style={{ "strokeWidth": "0.078125" }}
                />
                <path
                  id="path187"
                  d="M 10,0.25 A 9.75,9.75 0 1 0 19.75,10 9.76875,9.76875 0 0 0 10,0.25 Z m 2.625,14.25 a 0.75,0.75 0 0 1 -1.5,0 V 12.25 H 7.375 A 0.75,0.75 0 0 1 6.765628,11.931244 0.740625,0.740625 0 0 1 6.671908,11.246872 l 2.25,-6.375 a 0.75,0.75 0 0 1 1.406256,0.506256 L 8.434408,10.75 h 2.690628 V 8.5 a 0.75,0.75 0 0 1 1.5,0 z"
                  style={{ "strokeWidth": "0.078125" }}
                  fill="#FADDDA"
                />
              </svg>
              Wait a while until the group is accepted. <br />
            </li>
            <li className="text-gray-700 dark:text-dark-paragraph">
              {" "}
              <svg
                className="ml-2 inline-block mr-2"
                viewBox="0 0 24 24"
                version="1.1"
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  id="rect185"
                  fill="none"
                  height={24}
                  width={24}
                  x={0}
                  y={0}
                  style={{ "strokeWidth": "0.078125" }}
                />
                <path
                  id="path187"
                  d="M 10,0.25 A 9.75,9.75 0 1 0 19.75,10 9.76875,9.76875 0 0 0 10,0.25 Z M 9.615628,8.875 A 3.375,3.375 0 1 1 7.225,14.640628 0.75,0.75 0 1 1 8.275,13.571872 1.884375,1.884375 0 0 0 9.615628,14.125 a 1.865625,1.865625 0 0 0 1.331244,-0.553128 1.85625,1.85625 0 0 0 0,-2.643744 A 1.865625,1.865625 0 0 0 9.615628,10.375 1.884375,1.884375 0 0 0 8.275,10.928128 0.75,0.75 0 0 1 7.009372,10.271872 L 7.740628,5.753128 A 0.75,0.75 0 0 1 8.481256,5.125 H 12.25 a 0.75,0.75 0 0 1 0,1.5 H 9.118756 L 8.734372,8.9875 A 3.496875,3.496875 0 0 1 9.615628,8.87506 Z"
                  style={{ "strokeWidth": "0.078125" }}
                  fill="#FADDDA"
                />
              </svg>
              You will receive notifications (email, Slack, webhooks) about new
              posts and comments with your keywords.
              <br />
            </li>
          </ol>
        </div>
        <div className="w-full lg:w-1/2 px-6 h-80">
          <img
            className="h-full mx-auto object-cover rounded-lg"
            src={brandMonitoringHowDoImg}
            alt="tool for monitoring brands on facebook groups"
          />
        </div>
      </div>
    </div>
  );
}
