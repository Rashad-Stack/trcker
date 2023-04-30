import React from 'react'

export default function FinalProvisionsPolicy() {
  return (
    <li className="p-6 text-gray-700 dark:text-dark-paragraph rounded shadow-xl">
        <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
          <span className="text-xl">Final Provisions</span>
        </button>
        <p className="hidden mt-4 text-gray-700 dark:text-dark-paragraph font-normal leading-loose"> </p>
        <ol
          className="mt-4 text-gray-700 dark:text-dark-paragraph text-sm font-normal leading-loose"
          style={{ "listStyle": "decimal", margin: "1rem" }}
        >
          {" "}
          <li className='text-gray-700 dark:text-dark-paragraph'>
            We may occasionally amend this Privacy Policy, in particular to
            reflect changes of law, technology or the way the Website operates.
            Then-current version of the Privacy Policy shall always be available
            on the Website. Additionally, if you register on the Website, we
            will inform you about the change in the Privacy Policy by sending
            information by e-mail.
          </li>
          <li className='text-gray-700 dark:text-dark-paragraph'>
            If any provision of the Privacy Policy is considered invalid by a
            valid court decision, the remaining provisions of the Policy shall
            remain in force.
          </li>
          <li className='text-gray-700 dark:text-dark-paragraph'>
            The Privacy Policy is subject to and will be interpreted in
            accordance with the provisions of Polish law unless consumer
            protection rights in any jurisdiction provide otherwise
          </li>
        </ol>
        <p />
      </li>
  )
}
