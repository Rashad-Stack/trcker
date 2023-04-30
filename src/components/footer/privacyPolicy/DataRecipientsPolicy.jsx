import React from 'react'

export default function DataRecipientsPolicy() {
  return (
    <li className="p-6 text-gray-700 dark:text-dark-paragraph rounded shadow-xl">
        <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
          <span className="text-xl">Data recipients</span>
        </button>
        <p className="hidden mt-4 text-gray-700 dark:text-dark-paragraph font-normal leading-loose"> </p>
        <ol
          className="mt-4 text-gray-700 dark:text-dark-paragraph text-sm font-normal leading-loose"
          style={{ "listStyle": "decimal", margin: "1rem" }}
        >
          {" "}
          <li className='text-gray-700 dark:text-dark-paragraph'>
            We will not share Your personal data collected via the Website, save
            for our verified subcontractors, who we may entrust with processing
            of Your personal data for purpose of processing payments, shipping,
            maintaining support for the Website and providing services via the
            Website, as well as legal, accounting, IT and other advisors or
            contractors. Your data may also be transferred to purchaser of the
            Website.
          </li>
        </ol>
        <p />
      </li>
  )
}
