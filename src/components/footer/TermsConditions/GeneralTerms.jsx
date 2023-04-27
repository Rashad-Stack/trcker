import React from "react";

export default function GeneralTerms() {
  return (
    <div className="max-w-3xl mx-auto">
        <ul className="space-y-4 lg:space-y-6">
        <li className="p-6 text-gray-700 dark:text-dark-paragraph rounded shadow-xl">
          <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
            <span className="text-xl text-light-title dark:text-white">General Terms</span>
          </button>
          <p className="mt-4 text-gray-700 dark:text-dark-paragraph font-normal leading-loose text-sm">
            These Terms shall govern general terms and conditions of providing
            Services by electronic means by LosCoderos.com, a sole proprietor
            with primary place of business at ul. Olimpijska 27, 05-220
            Zielonka, VAT EU PL9521875734, hereinafter referred to as
            “LosCoderos”.{" "}
          </p>
          <p className="mt-4 text-gray-700 dark:text-dark-paragraph font-normal leading-loose  text-sm">
            By creating a User Account, the User declares that he has read the
            provisions of these Terms, accepts them, as well as that he agrees
            to immediately make the Service available to him, after fulfilling
            the conditions specified in Terms.
          </p>
        </li>
        </ul>
    </div>
  );
}
