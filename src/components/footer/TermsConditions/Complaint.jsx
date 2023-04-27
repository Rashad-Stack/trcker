import React from 'react'

export default function Complaint() {
  return (
    <div className="max-w-3xl mx-auto">
        <ul className="space-y-4 lg:space-y-6">
        <li className="p-6 text-gray-700 dark:text-dark-paragraph rounded shadow-xl">
          <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
            <span className="text-xl text-light-title dark:text-white">Complaint procedure</span>
          </button>
          <p className="hidden mt-4 text-gray-700 dark:text-dark-paragraph font-normal leading-loose">
            {" "}
          </p>
          <ol
            className="mt-4 text-gray-700 dark:text-dark-paragraph text-sm font-normal leading-loose"
            style={{ "listStyle": "decimal", margin: "1rem" }}
          >
            {" "}
            <li className='text-gray-700 dark:text-dark-paragraph'>
              Complaints related to the functionating of the Website, the
              provision of Services and questions concerning the use of the
              Website shall be submitted to the electronic mail address
              info@groupstracker.com. The complaint shall include the data of
              the person lodging the complaint (name, surname, address) and the
              justification of the complaint.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              LosCoderos shall consider the complaint within 14 calendar days
              since the day of its receipt and shall immediately inform the
              User, via e-mail, of the manner in which the complaint has been
              handled. If the information provided in the content of the
              complain needs to be supplemented, the time for processing the
              complaint shall be extended.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              The User shall have no right to appeal against the content of the
              response to the complaint.
            </li>
          </ol>
          <p />
        </li>
        </ul>
    </div>
  )
}
