import React from "react";
import { Link } from "react-router-dom";
import DasboardCard from "./DasboardCard";
import { business, comments, contact, hits } from "./dasboardIcons";
import ItemCard from "./ItemCard";

export default function DashboardMain() {
  return (
    <div className="mx-auto lg:ml-80 px-8">
      <div className="container mx-auto">
        <div className="py-8">
          <div className="container mx-auto">
            <Link
              className="inline-block w-full md:w-auto px-6 py-3 font-medium text-white bg-primary rounded transition duration-200"
              href="/panel/groups"
            >
              Add Facebook group
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div>
          <div className="py-8">
            <div className="container mx-auto">
              <div className="flex flex-wrap items-center">
                <DasboardCard
                  title="Groups"
                  count="0"
                  icon={business}
                  to="/panel/card"
                />
                <DasboardCard
                  title="Keywords"
                  count="0"
                  icon={contact}
                  to="/panel/keywords"
                />
                <DasboardCard
                  title="Posts"
                  count="0"
                  icon={hits}
                  to="/panel/post"
                />
                <DasboardCard
                  title="Comments"
                  count="0"
                  icon={comments}
                  to="/panel/hits"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8">
          <h2 className="text-light-title dark:text-white mb-4 text-2xl font-bold">
            New posts and comments
          </h2>
        </div>
        <div className="py-8">
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              <ItemCard />
              {/* Us this when no item available */}
              {/* <div className="w-full text-sm text-gray-700 dark:text-dark-paragraph">
                <span>No new items</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
