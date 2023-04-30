import React from 'react'

export default function CookiesPolicy() {
  return (
    <li className="p-6 text-gray-700 dark:text-dark-paragraph rounded shadow-xl">
        <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
          <span className="text-xl">Cookies</span>
        </button>
        <p className="hidden mt-4 text-gray-700 dark:text-dark-paragraph font-normal leading-loose"> </p>
        <ol
          className="mt-4 text-gray-700 dark:text-dark-paragraph text-sm font-normal leading-loose"
          style={{ "listStyle": "decimal", margin: "1rem" }}
        >
          {" "}
          <li className='text-gray-700 dark:text-dark-paragraph'>
            While browsing the Website, upon Your consent and subject to
            configuration of the browser used on Your terminal device, one or
            several cookies may be stored by us or our sub-contractor. Please
            read the following information about cookies and use thereof.
          </li>
          <li className='text-gray-700 dark:text-dark-paragraph'>
            Cookies are small files that are saved on Your computer's hard drive
            when You visit certain websites. They contain information about the
            device and usually do not contain any personal data. These files
            cannot be used to infect Your device with viruses or other malware.
            In cookies we store basic, anonymous information about users (e.g.,
            their identifiers) ​​and other data to improve user experience,
            required for optimization and correct display of content of the
            Website as well as advertising campaigns. Personal data collected
            using "cookies" may be collected only in order to perform specific
            functions for the user. Such data is encrypted in a way that
            prevents access by unauthorized persons.
          </li>
          <li className='text-gray-700 dark:text-dark-paragraph'>
            As a Website user, You may stop providing this information to the
            Website at any time by deleting the cookies stored on Your terminal
            devices. To do so, please change the settings of Your browser.
          </li>
          <li className='text-gray-700 dark:text-dark-paragraph'>
            You may also configure the browser in such way that it will block
            recording of cookies by specific websites of Your choice or by all
            websites. Such settings will, however, result in the loss of some
            Website functionalities that require installation of cookies. Under
            the Polish Act - Telecommunication Law, consent for the use of
            cookies shall be deemed granted if configuration of the browser
            allows installation of cookies on the computer.
          </li>
        </ol>
        <p />
      </li>
  )
}
