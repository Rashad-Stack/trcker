import React from "react";
import { Link } from "react-router-dom";

export default function DasboardCard({ title, count, icon,to }) {
  return (
    <div className="w-1/4 lg:w-1/4 pr-1 lg:pr-4">
      <Link to={to}>
        <div className="p-2 lg:p-6  rounded bg-light-tertiary dark:bg-dark-tertiary">
          <div className="flex mb-2">
            <span className="inline-block mr-2 text-primary">{icon}</span>
            <h3 className="text-sm text-gray-700 dark:text-dark-paragraph hidden lg:block">{title}</h3>
          </div>
          <h2 className="text-3xl font-bold text-light-title dark:text-white">{count}</h2>
          <span className="text-xs text-ping-500" />
        </div>
      </Link>
    </div>
  );
}
