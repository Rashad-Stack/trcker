import React from 'react'

export default function SecurityPolicy() {
  return (
    <li className="p-6 text-gray-700 dark:text-dark-paragraph rounded shadow-xl">
        <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
          <span className="text-xl">Security</span>
        </button>
        <p className="hidden mt-4 text-gray-700 dark:text-dark-paragraph font-normal leading-loose"> </p>
        <ol
          className="mt-4 text-gray-700 dark:text-dark-paragraph text-sm font-normal leading-loose"
          style={{ "listStyle": "decimal", margin: "1rem" }}
        >
          {" "}
          <li className='text-gray-700 dark:text-dark-paragraph'>
            We have applied such solutions with respect to the Website, that
            provide high security level of Your personal data, including SSL
            certificate and IT software behind the Website which fulfills high
            security standards for processing of your data.
          </li>
        </ol>
        <p />
      </li>
  )
}
