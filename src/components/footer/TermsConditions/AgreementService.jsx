import React from 'react'

export default function AgreementService() {
  return (
    <div className="max-w-3xl mx-auto">
        <ul className="space-y-4 lg:space-y-6">
        <li className="p-6 text-gray-700 dark:text-dark-paragraph rounded shadow-xl">
          <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
            <span className="text-xl text-light-title dark:text-white">
              Termination of the Service agreement
            </span>
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
              The agreement for provision of Services may be terminated by
              either of the Parties at any time and without giving reasons, with
              30 days’ notice unless the individual agreement for a dedicated
              Service provides otherwise.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              In the event of termination of the agreement for the provision of
              the Service by the User prior to the expiry of the prepaid
              Subscription Period, LosCoderos shall not refund the User for the
              remaining, unused Subscription Period.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              In the event of termination of the agreement for the provision of
              the Service by LosCoderos with the User before the expiry of the
              prepaid Subscription Period, LosCoderos shall reimburse the User
              for the fee for the Service in the amount proportional to the
              remaining, unused and prepaid Subscription Period,
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              The User shall terminate the contract for providing the Service by
              sending an appropriate declaration of will to LosCoderos e-mail
              address, however the termination contract shall take place after
              the period of notice of 30 calendar days.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              LosCoderos shall terminate the contract for the provision of the
              Service by sending an appropriate declaration of will to the
              User’s e-mail address provided by the User during the Registration
              process, however, the termination of the contract shall take place
              after the period of notice of 30 calendar days.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              LosCoderos shall have the right to terminate the contract for the
              provision of the Service with a User concerned without notice in
              case where any payment due to LosCoderos is more than 30 days past
              due or violation of the Terms by the User and in other cases
              provided in the Terms.
            </li>
          </ol>
          <p />
        </li>
        </ul>
    </div>
  )
}
