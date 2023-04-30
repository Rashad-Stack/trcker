import React from "react";

export default function GeneralPrivacy() {
  return (
    <li className="p-6 text-gray-700 dark:text-dark-paragraph rounded shadow-xl">
      <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
        <span className="text-xl">General</span>
      </button>
      <p className="hidden mt-4 text-gray-700 dark:text-dark-paragraph font-normal leading-loose"> </p>
      <ol
        className="mt-4 text-gray-700 dark:text-dark-paragraph text-sm font-normal leading-loose"
        style={{ "listStyle": "decimal", margin: "1rem" }}
      >
        {" "}
        <li className="text-gray-700 dark:text-dark-paragraph">
          LosCoderos.com, a sole proprietor with primary place of business at
          ul. Olimpijska 27 05-220 Zielonka, VAT EU PL9521875734 is a controller
          of Your personal data collected via [GroupsTracker.com] website
          (“Website”). In all matters related to processing of Your personal
          data, please contact us by email at [info@groupstracker.com] or in
          writing at [ul. Olimpijska 27, 05-220 Zielonka].
        </li>
      </ol>
      <p />
    </li>
  );
}
