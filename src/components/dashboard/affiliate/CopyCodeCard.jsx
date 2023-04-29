import React from "react";
import { Link } from "react-router-dom";

export default function CopyCodeCard({
  title,
  linkTitle,
  to,
  html,
  linkSubtile,
  img,
}) {
  return (
    <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="flex -mx-4">
        <div className="flex items-center w-1/2 px-4">
          <p className="text-sm text-gray-700 dark:text-dark-paragraph ">
            {title}
            <br />
            <Link className="text-primary flex flex-col" to={to}>
            {img?<img src={img} alt="logo with title" className="w-8 h-8 object-contain" />:linkTitle}
              {linkSubtile && (
                <span className="text-gray-700 dark:text-dark-paragraph">
                  {linkSubtile}
                </span>
              )}</Link>
          </p>
        </div>
        <div className="w-1/2 px-4">
          <p className="mb-1 text-xs text-gray-700 dark:text-dark-paragraph font-medium">
            HTML code: <br />
            <textarea
              defaultValue={html}
              className="bg-light-secondary dark:bg-dark-secondary rounded p-2 text-gray-700 dark:text-dark-paragraph w-full h-16"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
