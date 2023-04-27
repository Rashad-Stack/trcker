import React from 'react'

export default function FinalProvisions() {
  return (
    <div className="max-w-3xl mx-auto">
        <ul className="space-y-4 lg:space-y-6">
        <li className="p-6 text-gray-700 dark:text-dark-paragraph rounded shadow-xl">
          <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
            <span className="text-xl text-light-title dark:text-white">Final provisions</span>
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
              The processing of personal data by LosCoderos shall be carried out
              in accordance with the principles set out in the Private Policy.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              Terms shall be considered as general terms and conditions of
              contracts within the meaning of the Polish Civil Code. The
              application of any general conditions of contracts or commercial
              regulations concluded by the User shall be excluded.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              Terms can be changed by LosCoderos at any time, without prior
              consent of the User. The information about the change of Terms
              shall be provided to the Users at the e-mail address indicated
              during registration. The changes referred in the preceding
              sentence shall be binding for the User from the date specified by
              LosCoderos, falling not sooner than 14 days from the date of
              informing LosCoderos abut these changes. The User shall have the
              right to terminate the contract for the provision of Service
              within 14 days from the date of receiving information about
              changes in the Regulations. If the User does not terminate
              agreement for provision of the Services, or if at such time he
              does not use any Service – will not delete the account within the
              period indicated in the preceding sentence, it shall be tantamount
              to the acceptance of the changes to the Regulations and the
              contract for the provision of Services. In the event of
              termination of the agreement due to amendment to these Terms, the
              Services will be provided on previous terms and conditions until
              the end of the current Subscription Period. Subsequent orders may
              be placed only under new Terms.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              The User shall not be allowed to transfer the right and
              obligations under the Agreement to a third party without prior
              written consent of LosCoderos.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              LosCoderos may transfer all rights and obligations to other
              entities, at its own discretion and to which the User hereby
              grants his or her consent. LosCoderos shall inform the User in a
              manner appropriate for amending the Terms. Provisions of section 3
              above shall apply accordingly.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              In case any provision of the Terms is deemed invalid by virtue of
              a valid court decision, the remaining provisions of the
              Regulations remain on force. All disputes arising between the User
              and LosCoderos shall be firstly resolved amicably, however in case
              of failure an agreement, they shall be a subject to the decision
              of competent Court.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              In matters not regulated in the Terms, generally applicable
              provisions of Polish law shall apply unless consumer protection
              rights in any jurisdiction provide otherwise.
            </li>
            <li className='text-gray-700 dark:text-dark-paragraph'>
              The provisions of the Terms shall come into force on 1st January
              2022.
            </li>
          </ol>
          <p />
        </li>
        </ul>
    </div>
  )
}
