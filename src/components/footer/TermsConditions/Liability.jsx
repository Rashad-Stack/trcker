import React from 'react'

export default function Liability() {
  return (
    <div className="max-w-3xl mx-auto">
        <ul className="space-y-4 lg:space-y-6">
        <li className="p-6 text-gray-700 dark:text-dark-paragraph rounded shadow-xl">
          <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
            <span className="text-xl text-light-title dark:text-white">Liability</span>
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
              LosCoderos shall provide Services with due diligence, in
              accordance with these Terms.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              LosCoderos shall be liable to the User in connection with the
              operation of the Website or the Service provided to the User only
              in case of intentional damage.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              In particular, LosCoderos shall not be liable for non-performance
              or improper performance of the Service, especially if it is an
              effect of:
              <ol
                className="mt-4 text-gray-700 dark:text-dark-paragraph text-sm font-normal leading-loose"
                style={{ "listStyle": "decimal", margin: "1rem" }}
              >
                {" "}
                <li className='text-gray-700 dark:text-dark-paragraph'>
                  Event of Force Majeure or other circumstances for which
                  LosCoderos, in accordance with generally applicable law, shall
                  not be liable;
                </li>
                <li className='text-gray-700 dark:text-dark-paragraph'>
                  Reasons attributable to third parties through which the
                  Service is provided;
                </li>
                <li className='text-gray-700 dark:text-dark-paragraph'>Improper use of the Website or Service by the User;</li>
                <li className='text-gray-700 dark:text-dark-paragraph'>
                  Use of the Website or Service by the User in a manner
                  inconsistent with the Terms or applicable law;
                </li>
                <li className='text-gray-700 dark:text-dark-paragraph'>
                  Use of the User’s Password by third parties, if these persons
                  came into possession of it with the User’s consent or as a
                  result of insufficient protection of the Password by the User
                  against unauthorized persons;
                </li>
              </ol>
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              In any case, LosCoderos’s liability shall not cover lost profits
              and in each case is limited to a Service fee actually received by
              LosCoderos in connection with such Service to which a loss is
              attributable.
            </li>
          </ol>
          <p />
        </li>
        </ul>
    </div>
  )
}
