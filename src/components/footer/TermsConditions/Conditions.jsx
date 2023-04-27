import React from 'react'

export default function Conditions() {
  return (
    <div className="max-w-3xl mx-auto">
        <ul className="space-y-4 lg:space-y-6">
        <li className="p-6 text-gray-700 dark:text-dark-paragraph rounded shadow-xl">
          <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
            <span className="text-xl text-light-title dark:text-white">
              Conditions for using the Website and the Services
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
              The User shall use the Website and the Services provided in a
              manner consistent with their intended use, and moreover, in a
              manner that does not violate generally applicable laws or the
              rights of LosCoderos or third parties or any applicable good
              practices.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              The User bears full liability for the content uploaded by the User
              through the Website or applications and tools made available by
              LosCoderos as a part of Services, as well as for damages resulting
              from the User’s actions being in breach of these Terms. It is
              forbidden to provide illegal content by Users.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              The use of the Website and Services shall take place exclusively
              at the risk of the User and LosCoderos does not give any guarantee
              and does not bear any liability for any consequences of using the
              Website or Services by the User.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              The User shall not:
              <ol
                className="mt-4 text-gray-700 dark:text-dark-paragraph text-sm font-normal leading-loose"
                style={{ "listStyle": "decimal", margin: "1rem" }}
              >
                {" "}
                <li className='text-gray-700 dark:text-dark-paragraph'>
                  Use any hardware or software that may damage or interfere with
                  the proper functioning of the Website or the applications and
                  IT tools made available by LosCoderos in connection with the
                  provision of the Services;
                </li>
                <li className='text-gray-700 dark:text-dark-paragraph'>
                  Use any hardware or software that enables the interception of
                  any system, data or information from the Website;
                </li>
                <li className='text-gray-700 dark:text-dark-paragraph'>
                  Take any action that could unreasonably or disproportionately
                  burden the Website or other Services’ infrastructure.
                </li>
              </ol>
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              LosCoderos shall have the right to deny the access to the Website
              or Services, terminate the Agreement for the provision of the
              Service, block or delete the User’s Account in the event that
              LosCoderos obtains reliable information that the User is using the
              Website or Services in the illegal or immoral manner, or if it
              otherwise violates the provisions of these Terms or acts to the
              detriment of LosCoderos or other Users. LosCoderos notifies the
              User of the intention to take the actions referred to above by
              electronic means to the address provided by the User in the
              registration form.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              The blocking of access to the User’s Account or Services for the
              reasons listed in section 4 above shall last for the period
              necessary to resolve the issue that constitutes the basis for
              blocking access to the User’s Account or Services. LosCoderos
              shall notify the User of its intention to block access to the
              User’s Account or Services. LosCoderos notifies the User of its
              intention to block access to the User’s Account or Services
              electronically to the address provided by the User in registration
              form.
            </li>
          </ol>
          <p />
        </li>
        </ul>
    </div>
  )
}
