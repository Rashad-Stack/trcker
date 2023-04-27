import React from 'react'

export default function Services() {
  return (
    <div className="max-w-3xl mx-auto">
        <ul className="space-y-4 lg:space-y-6">
        <li className="p-6 text-gray-700 dark:text-dark-paragraph rounded shadow-xl">
          <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
            <span className="text-xl text-light-title dark:text-white">
              Type and scope of Services, ordering of Services and payment
              conditions
            </span>
          </button>
          <p className="hidden mt-4 text-gray-700 dark:text-dark-paragraph font-normal leading-loose">
            {" "}
          </p>
          <ol
            className="mt-4 text-gray-400 text-sm font-normal leading-loose"
            style={{ "listStyle": "decimal", margin: "1rem" }}
          >
            <li className='text-gray-700 dark:text-dark-paragraph'>
              The hereby Terms shall apply to the provision by LosCoderos by
              electronic means to Users, the following Services:
            </li>
            <ol
              className="mt-4 text-gray-400 text-sm font-normal leading-loose"
              style={{ "listStyle": "decimal", margin: "1rem" }}
            >
              <li className='text-gray-700 dark:text-dark-paragraph'>monitoring Facebook groups</li>
              <li className='text-gray-700 dark:text-dark-paragraph'>
                sending notifications when new post or comment with given
                keywords appear
              </li>
            </ol>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              The detailed description of the Services and their scope is
              available at the Website.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              The prices of the Services are specified in the Price List. The
              prices given in the Price List are prices [net, expressed in EURO,
              subject to an increase by VAT / gross, expressed in EURO]. The
              parties are bound by the price specified in the Price List in
              force and published on the Website on the date of placing the
              order for the Service by the User, in the manner specified in
              these Terms. A subsequent change of the Price List does not affect
              the price valid at the time of concluding the contract for the
              provision of the Service.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              Prices for Dedicated Services are negotiated individually and
              depend on arrangements with the User.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              The method of providing Services by electronic means by LosCoderos
              is specified in these Terms, unless the User has concluded a
              written agreement with LosCoderos for the provision of dedicated
              Services in the course of individually conducted negotiations.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              LosCoderos provides Services by electronic means 24 (twenty-four)
              hours per day, 7 (seven) days per week, for the Users who has
              ordered the Service.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              A Service may be ordered through User's Account, by completing the
              Service order form, in accordance with the parameters available
              for each Service.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              When specifying the parameters of the Service referred to in
              section 7 above, the User receives summary of he price of the
              selected Service, its duration and scope thereof.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              The User orders the Service by selecting the appropriate function
              under the order form or by creating an account (registration).
              Afterwards LosCoderos sends to the e-mail address provided by the
              User during Registration the confirmation of concluding the
              contract for the provision of the Service by electronic means.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              If a Trial Period has been provided for a given Service, the User
              who ordered this Service in accordance with these Terms has the
              right to use the Service free of charge during the Trial Period in
              accordance with option of his choice. During the Trial Period or
              after its end, the User may only extend the Service for a fee,
              under relevant Service order. If the Service is not extended, the
              User will not be able to access it after the expiry of the Trial
              Period. Each User may use the free Trial Period for a given
              Service only once. The User may choose the payment methods for the
              Services, as indicated in the ordering process.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              Activation of the Service after the end of the Trial Period, and
              if the Trial Period for a given Service has not been provided for
              - after placing an order for the Service by the User and after the
              User receives confirmation from LosCoderos of concluding the
              contract for the provision of the Service by electronic means,
              will be made upon confirmation of initial payment by the User, in
              accordance with the payment terms selected by the User.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              LosCoderos sends the User who purchased the Service electronic
              invoices documenting such purchase to the e-mail address of the
              User provided by him during Registration.
            </li>
          </ol>
          <p />
        </li>
        </ul>
    </div>
  )
}
