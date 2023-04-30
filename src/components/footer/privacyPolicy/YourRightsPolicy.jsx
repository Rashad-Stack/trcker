import React from 'react'

export default function YourRightsPolicy() {
  return (
    <li className="p-6 text-gray-700 dark:text-dark-paragraph rounded shadow-xl">
        <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
          <span className="text-xl">Your rights</span>
        </button>
        <p className="hidden mt-4 text-gray-700 dark:text-dark-paragraph font-normal leading-loose"> </p>
        <ol
          className="mt-4 text-gray-700 dark:text-dark-paragraphtext-sm font-normal leading-loose"
          style={{ "listStyle": "decimal", margin: "1rem" }}
        >
          {" "}
          <li className='text-gray-700 dark:text-dark-paragraph'>
            You have the right to access, rectify (correct), erase or restrict
            processing of Your data and to object to processing thereof
            including processing for marketing purpose. With respect to such
            data that are processed upon your consent or for purpose of
            performance of a contract You may request transfer thereof.
          </li>
          <li className='text-gray-700 dark:text-dark-paragraph'>
            Should You decide to exercise any of your rights set out above,
            please contact us by email at [info@groupstracker.com] or in writing
            at [ul. Olimpijska 27, 05-220 Zielonka].
          </li>
          <li className='text-gray-700 dark:text-dark-paragraph'>
            If You have any objections with respect to processing of Your data,
            You may lodge a complaint with a supervisory authority.
          </li>
        </ol>
        <p />
      </li>
  )
}
