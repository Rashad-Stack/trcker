import React from "react";
import { Link } from "react-router-dom";

export default function FoundPost() {
  return (
    <>
      <h2 className="text-light-title dark:text-white mb-4 text-2xl font-bold">
        Found posts
      </h2>
      <div className="flex flex-wrap text-sm text-center">
        <span>
          <span className="group relative inline-block py-2 px-3 mr-2 rounded text-gray text-xs  bg-light-tertiary dark:bg-dark-tertiary text-light-title dark:text-white">
            All posts
            <span className="hidden absolute group-hover:block rounded shadow-xl p-2 bg-light-tertiary dark:bg-dark-tertiary text-xs text-gray-700 dark:text-dark-paragraph w-32  mt-8">
              Require Enterprise plan
            </span>
          </span>
        </span>
        <Link href="/panel/hits/0/0/">
          <span className="inline-block py-2 px-3 mr-2 rounded text-white  text-xs  bg-primary">
            All keywords
          </span>
        </Link>
      </div>
    </>
  );
}
