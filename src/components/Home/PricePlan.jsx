import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function PricePlan() {
  return (
    <section className="bg-light-secondary dark:bg-dark-secondary py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary font-bold">Simple plans</span>
          <h2 className="text-black dark:text-white mb-2 text-4xl lg:text-5xl font-bold font-heading">
            Choose your best plan
          </h2>
          <p className="mb-6 text-gray-500">
            You can change plan anytime. Includes taxes.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div className="p-8 bg-light-tertiary dark:bg-dark-tertiary shadow-xl rounded">
              <h4 className="text-black dark:text-white mb-2 text-2xl font-bold font-heading">
                Private
              </h4>
              <span className="text-black dark:text-white text-6xl font-bold">
                Free
              </span>
              <p className="mt-3 mb-6 text-gray-500 leading-loose">
                Best for individuals to test system
              </p>
              <ul className="mb-6 text-gray-500">
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>1 public group</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>checking new posts: 1/day</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>1 keyword</span>
                </li>
              </ul>
              <Button title="Get Started" to="/plan/0" />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div className="p-8 bg-primary shadow-xl rounded">
              <h4 className="mb-2 text-2xl font-bold text-white">Business</h4>
              <span className="text-6xl font-bold text-white ">
                {" "}
                <span className="text-3xl line-through">$10</span>$5
              </span>{" "}
              <span className="text-gray-50 text-xs">/group/month</span>
              <p className="mt-3 mb-6 leading-loose text-gray-50">
                Best for monitoring public Facebook Groups
              </p>{" "}
              <ul className="mb-6 text-gray-50">
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>any public groups</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>checking new posts: 6/day</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>unlimited keywords</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>unlimited posts &amp; comments</span>
                </li>
              </ul>
              <Button active title="Get Started" to="/plan/0" />
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <div className="p-8 bg-light-tertiary dark:bg-dark-tertiary shadow-xl rounded relative">
              <h4 className="text-black dark:text-white mb-2 text-2xl font-bold font-heading">
                Enterprise
              </h4>
              <span className="text-black dark:text-white text-6xl font-bold">
                <span className="text-3xl line-through">$20</span>$10
              </span>
              <span className="text-gray-400 text-xs">/group/month</span>
              <p className="mt-3 mb-6 text-gray-500 leading-loose">
                Best for monitoring public &amp; private Facebook groups
              </p>
              <ul className="mb-6 text-gray-500">
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>any public &amp; private groups</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>checking new posts: 1/hour</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>unlimited keywords &amp; posts</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>instant notifications</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>group members downloading</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <Link
                      className="text-red-500"
                      to="/api-for-facebook-groups"
                    >
                      API, Webhooks
                    </Link>
                  </span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <Link
                      className="text-red-500"
                      to="/slack-integration-for-facebook-groups"
                    >
                      Slack integration
                    </Link>
                  </span>
                </li>
              </ul>
              <Button title="Get Started" to="/plan/0" />
            </div>
          </div>
          <div className="w-full px-4 text-center mt-8">
            <div
              className="p-8 bg-light-tertiary dark:bg-dark-tertiary shadow-xl rounded w-full lg:w-1/2"
              style={{ margin: "auto" }}
            >
              <h4 className="text-black dark:text-white mb-2 text-2xl font-bold font-heading">
                Custom
              </h4>
              <p className="mt-3 mb-6 text-gray-500 leading-loose">
                If you need custom functions
              </p>
              <ul className="mb-6 text-gray-500">
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>checking new posts: 1/min</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>downloading all posts/comments</span>
                </li>
                <li className="mb-2 flex">
                  <svg
                    className="mr-2 w-5 h-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>other functions you need</span>
                </li>
              </ul>
              <Button title="Contact us" to="/contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
