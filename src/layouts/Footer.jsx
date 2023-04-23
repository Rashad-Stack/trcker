import React from "react";
import logo from "../assets/images/logo.png"
import facebook from "../assets/images/facebook-purple.svg"
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-light-secondary dark:bg-dark-secondary pb-10">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex flex-col items-center justify-between">
        <div className="w-full flex flex-wrap">
          <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
            <Link
              className="inline-block text-3xl font-bold leading-none"
              to="/"
            >
              <img
                className="h-12"
                src={logo}
                alt="facebook monitoring tool - !{configNoDeploy.domainName}"
                width="auto"
              />
            </Link>
            <p className="mt-4 mb-4 max-w-sm  text-gray-700 dark:text-dark-paragraph leading-loose">
              Best online tool for monitoring Facebook public and private
              groups.{" "}
            </p>
          </div>
          <div className="w-full lg:w-2/3 lg:pl-16 flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
              <h3 className="text-black dark:text-white mb-6 text-2xl font-bold">Products</h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-gray-700 dark:text-dark-paragraph"
                    to="/"
                    title="online service to monitor fb groups"
                  >
                    Start
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-gray-700 dark:text-dark-paragraph"
                    to="/how-it-works"
                    title="How does GroupsTracker works?"
                  >
                    How it works
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-gray-700 dark:text-dark-paragraph"
                    to="/pricing"
                    title="How much does it cost to use GroupsTracker.com?"
                  >
                    Pricing Plans
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-gray-700 dark:text-dark-paragraph"
                    to="/api-for-facebook-groups"
                    title="Facebook Groups API, Webhooks GroupsTracker.com"
                  >
                    API for Facebook Groups
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-gray-700 dark:text-dark-paragraph"
                    to="/slack-integration-for-facebook-groups"
                    title="Sending Facebook Groups Posts to Slack GroupsTracker.com"
                  >
                    Slack integration
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-gray-700 dark:text-dark-paragraph"
                    href="/chrome-plugin-for-monitoring-facebook-groups"
                    title="Chrome plugin for Facebook Groups GroupsTracker.com"
                  >
                    Chrome plugin
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-gray-700 dark:text-dark-paragraph"
                    to="/how-to-monitor-brands-on-facebook-groups"
                    title="Brands tracking on Facebook Groups GroupsTracker.com"
                  >
                    Brands monitoring
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-gray-700 dark:text-dark-paragraph"
                    to="/how-to-extract-facebook-groups-members"
                    title="Facebook Group extractorGroupsTracker.com"
                  >
                    Members extracting
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
              <h3 className="text-black dark:text-white mb-6 text-2xl font-bold">Important Links</h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-gray-700 dark:text-dark-paragraph"
                    to="/terms-of-service"
                    title="Rules and regulation of GroupsTracker service "
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-gray-700 dark:text-dark-paragraph"
                    to="/privacy-policy"
                    title="Clients data and cookies policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-gray-700 dark:text-dark-paragraph"
                    to="/groouply-alternative"
                    title="Groouply.com Alternative"
                  >
                    Alternative for Groouply
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-gray-700 dark:text-dark-paragraph"
                    to="/phantombuster-alternative"
                    title="Phantombuster.com Alternative"
                  >
                    Alternative for Phantombuster
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-gray-700 dark:text-dark-paragraph"
                    to="/affiliate"
                    title="GroupsTracker affiliate program"
                  >
                    Affiliate
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 lg:w-auto">
              <h3 className="text-black dark:text-white mb-6 text-2xl font-bold">Help</h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-gray-700 dark:text-dark-paragraph"
                    to="/help"
                    title="Help for GroupsTracker.com"
                  >
                    FAQ
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-gray-700 dark:text-dark-paragraph"
                    to="/contact"
                    title="Have any problem or question?"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block mr-2 p-2 bg-gray-50 hover:bg-gray-100 rounded"
                    to="https://www.facebook.com/GroupsTrackercom-FB-Groups-Monitor-102215445703337/"
                  >
                    <img src={facebook} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="w-full text-center text-sm  text-gray-700 dark:text-dark-paragraph border-t border-gray-300 dark:border-gray-800 pt-12 mt-16">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
