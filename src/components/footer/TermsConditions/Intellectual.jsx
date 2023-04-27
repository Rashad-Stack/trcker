import React from 'react'

export default function Intellectual() {
  return (
    <div className="max-w-3xl mx-auto">
        <ul className="space-y-4 lg:space-y-6">
        <li className="p-6 text-gray-700 dark:text-dark-paragraph rounded shadow-xl">
          <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
            <span className="text-xl text-light-title dark:text-white">Intellectual Property Rights</span>
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
              The Services and software used in connection therewith, as well as
              the content, appearance, functional layout and graphic elements of
              the Website are protected by copyrights and/or other rights (based
              on Polish and international law) vested in LosCoderos or its
              suppliers.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              LosCoderos shall retain exclusive rights to the Website and all
              its elements, including software, graphic design of signs and
              markings, video images and recordings or audio, placed on the
              Website.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              LosCoderos grants to the User a personal, non-exclusive and
              non-transferable license to use the materials referred to in
              section 2 above, without the right to further sublicense.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              Under no circumstances LosCoderos shall transfer to the User any
              intellectual property rights to the Website, its parts or
              components referred to in section 2 above. Audio or video
              recordings made available to the User through the Website may only
              be played within the Website and may not be altered, modified or
              copied by the User in any way.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              The User may not copy, modify or transmit electronically or in any
              other form and in any other way any elements of the Website in
              whole or in part without the prior written consent of LosCoderos,
              except circumstances indicated in generally applicable law.
            </li>
          </ol>
          <p />
        </li>
        </ul>
    </div>
  )
}
