import React from "react";

export default function Allprivacy() {
  return (
    <ul className="space-y-4 lg:space-y-6">
      




      
      
      <li className="p-6 bg-gray-50 rounded shadow-xl">
        <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
          <span className="text-xl">Data recipients</span>
        </button>
        <p className="hidden mt-4 text-gray-400 font-normal leading-loose"> </p>
        <ol
          className="mt-4 text-gray-400 text-sm font-normal leading-loose"
          style={{ "list-style": "decimal", margin: "1rem" }}
        >
          {" "}
          <li>
            We will not share Your personal data collected via the Website, save
            for our verified subcontractors, who we may entrust with processing
            of Your personal data for purpose of processing payments, shipping,
            maintaining support for the Website and providing services via the
            Website, as well as legal, accounting, IT and other advisors or
            contractors. Your data may also be transferred to purchaser of the
            Website.
          </li>
        </ol>
        <p />
      </li>
      <li className="p-6 bg-gray-50 rounded shadow-xl">
        <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
          <span className="text-xl">Security</span>
        </button>
        <p className="hidden mt-4 text-gray-400 font-normal leading-loose"> </p>
        <ol
          className="mt-4 text-gray-400 text-sm font-normal leading-loose"
          style={{ "list-style": "decimal", margin: "1rem" }}
        >
          {" "}
          <li>
            We have applied such solutions with respect to the Website, that
            provide high security level of Your personal data, including SSL
            certificate and IT software behind the Website which fulfills high
            security standards for processing of your data.
          </li>
        </ol>
        <p />
      </li>
      <li className="p-6 bg-gray-50 rounded shadow-xl">
        <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
          <span className="text-xl">Cookies</span>
        </button>
        <p className="hidden mt-4 text-gray-400 font-normal leading-loose"> </p>
        <ol
          className="mt-4 text-gray-400 text-sm font-normal leading-loose"
          style={{ "list-style": "decimal", margin: "1rem" }}
        >
          {" "}
          <li>
            While browsing the Website, upon Your consent and subject to
            configuration of the browser used on Your terminal device, one or
            several cookies may be stored by us or our sub-contractor. Please
            read the following information about cookies and use thereof.
          </li>
          <li>
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
          <li>
            As a Website user, You may stop providing this information to the
            Website at any time by deleting the cookies stored on Your terminal
            devices. To do so, please change the settings of Your browser.
          </li>
          <li>
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
      <li className="p-6 bg-gray-50 rounded shadow-xl">
        <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
          <span className="text-xl">Final Provisions</span>
        </button>
        <p className="hidden mt-4 text-gray-400 font-normal leading-loose"> </p>
        <ol
          className="mt-4 text-gray-400 text-sm font-normal leading-loose"
          style={{ "list-style": "decimal", margin: "1rem" }}
        >
          {" "}
          <li>
            We may occasionally amend this Privacy Policy, in particular to
            reflect changes of law, technology or the way the Website operates.
            Then-current version of the Privacy Policy shall always be available
            on the Website. Additionally, if you register on the Website, we
            will inform you about the change in the Privacy Policy by sending
            information by e-mail.
          </li>
          <li>
            If any provision of the Privacy Policy is considered invalid by a
            valid court decision, the remaining provisions of the Policy shall
            remain in force.
          </li>
          <li>
            The Privacy Policy is subject to and will be interpreted in
            accordance with the provisions of Polish law unless consumer
            protection rights in any jurisdiction provide otherwise
          </li>
        </ol>
        <p />
      </li>
    </ul>
  );
}
