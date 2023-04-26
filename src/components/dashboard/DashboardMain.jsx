import React from "react";
import { Link } from "react-router-dom";
import DasboardCard from "./DasboardCard";
import { business, comments, contact, hits } from "./dasboardIcons";

export default function DashboardMain() {
  return (
    <div className="mx-auto lg:ml-80">
      <div className="container px-4 mx-auto">
        <section className="py-8">
          <div className="container px-4 mx-auto">
            <Link
              className="inline-block w-full md:w-auto px-6 py-3 font-medium text-white bg-primary rounded transition duration-200"
              href="/panel/groups"
            >
              Add Facebook group
            </Link>
          </div>
        </section>
      </div>
      <div className="container px-4 mx-auto">
        <div>
          <section className="py-8">
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap -m-4">
               <DasboardCard title="Groups" count="0" icon={business} to="/panel/card"/>
               <DasboardCard title="Keywords" count="0" icon={contact} to="/panel/keywords"/>
               <DasboardCard title="Posts" count="0" icon={hits} to="/panel/post"/>
               <DasboardCard title="Comments" count="0" icon={comments} to="/panel/hits"/>
              </div>
            </div>
          </section>
        </div>
        <section className="pt-8 px-6">
          <h2 className="text-light-title dark:text-white mb-4 text-2xl font-bold">New posts and comments</h2>
        </section>
        <section className="py-8">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="w-full p-6 text-sm text-gray-700 dark:text-dark-paragraph">
                <span>No new items</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
