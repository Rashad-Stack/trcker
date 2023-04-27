import React from 'react'

export default function TechnicalService() {
  return (
    <div className="max-w-3xl mx-auto">
        <ul className="space-y-4 lg:space-y-6">
        <li className="p-6 text-gray-700 dark:text-dark-paragraph rounded shadow-xl">
          <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
            <span className="text-xl text-light-title dark:text-white">
              Technical requirements and availability of the Service
            </span>
          </button>
          <p className="hidden mt-4 text-gray-700 dark:text-dark-paragraph font-normal leading-loose" />
          <ol
            className="mt-4 text-gray-400 text-sm font-normal leading-loose"
            style={{ "listStyle": "decimal", margin: "1rem" }}
          >
            {" "}
            <li className='text-gray-700 dark:text-dark-paragraph'>
              For the proper provision of Services through the Website, it is
              necessary to connect the User’s device to the Internet and install
              by the User on the Device a web browser in any version.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              The User acknowledges that after uploading photographs, graphics,
              images and texts to the IT tools made available by LosCoderos as a
              part of a given Service, their formats may be adapted by
              LosCoderos to the requirements of the Website, which may affect
              the quality of the file or its other properties.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              In order to ensure the provision of the Service at the highest
              level, LosCoderos reserves the right to improve the technical
              parameters of the provided Service and its functionality or to
              update the software used in providing the Service to the more
              actual version. LosCoderos shall inform the Users registered on
              the Website about any improvements or updates.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              LosCoderos shall be entitled to introduce a planned technical
              break in the functioning of the Service, in the period not longer
              than 48 hours, carried out in the time of the smallest load,
              connects with the operation and maintenance of the Website.
              LosCoderos shall notify in advance the Users registered on the
              Website about planned technical break.
            </li>
          </ol>
          <p />
        </li>
        </ul>
    </div>
  )
}
