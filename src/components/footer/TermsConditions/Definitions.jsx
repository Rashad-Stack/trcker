import React from 'react'

export default function Definitions() {
  return (
    <div className="max-w-3xl mx-auto">
        <ul className="space-y-4 lg:space-y-6">
        <li className="p-6 text-gray-700 dark:text-dark-paragraph rounded shadow-xl">
          <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
            <span className="text-xl text-light-title dark:text-white">Definitions</span>
          </button>
          <p className="hidden mt-4 text-gray-700 dark:text-dark-paragraph font-normal leading-loose">
            Unless otherwise expressly provided to the contrary in these Terms,
            all capitalized terms used herein shall have their respective
            meanings set forth below:
          </p>
          <ol
            className="mt-4 text-gray-700 dark:text-dark-paragraph text-sm font-normal leading-loose"
            style={{ "listStyle": "decimal", margin: "1rem" }}
          >
            {" "}
            <li>
              {" "}
              <b>Avatar </b>- means an electronic file created by the User in
              connection with the use of the Service, which is in particular a
              photo, graphic or image
            </li>
            <li>
              {" "}
              <b>Price list </b>- means the price list specifying the current
              amount of fees for Services provided by LosCoderos on the basis of
              these Terms, published on the Website.
            </li>
            <li>
              {" "}
              <b>Password </b>– means a sequence of letters, digital or other
              characters selected by the User during the Registration, used to
              secure access to the User Account.
            </li>
            <li>
              {" "}
              <b>LosCoderos </b>– means LosCoderos.com with its registered
              office in ul. Olimpijska 27, 05-220 Zielonka, VAT EU PL9521875734
            </li>
            <li>
              {" "}
              <b>User Account </b>– means a panel, individual for each User,
              launched for its benefit on the Website by LosCoderos, after
              completing Registration procedure by the User.
            </li>
            <li>
              {" "}
              <b>Subscription Period </b>– means a period of time for which the
              Service is made available to the User by LosCoderos, in accordance
              with the order placed by the User, based on the concluded contract
              for the provision of the Service.
            </li>
            <li>
              {" "}
              <b>Test Period </b>– means a period of time for which a given
              Service is made available to the User by LosCoderos free of charge
              for the purpose of testing it. The length of the Test Period is
              determined by LosCoderos and can be found in the description of
              the given Service on the Website.
            </li>
            <li>
              {" "}
              <b>Terms </b>– means these terms of use.
            </li>
            <li>
              {" "}
              <b>Registration </b>– means a set offactual activities defined in
              the Terms, necessary to create a User Account, order and us of a
              Service.
            </li>
            <li>
              {" "}
              <b>Webiste </b>– means the website operated by LosCoderos
              available at: https://www.groupstracker.com,
            </li>
            <li>
              {" "}
              <b>Force Majeure </b>– means an external event, unpredictable and
              impossible to prevent, in particular: catastrophic acts of nature,
              acts of legislative and executive power, as well as strikes, riots
              and warfare conducted on the territory of the Republic of Poland.
            </li>
            <li>
              {" "}
              <b>User </b>– means a natural person, a legal person or an
              organization without legal personality having legal capacity under
              a law, conducting a commercial or professional activity in its own
              name.
            </li>
            <li>
              {" "}
              <b>Service </b>– means a service provided electronically, through
              the Website, by LosCoderos.
            </li>
          </ol>
          <p />
        </li>
        </ul>
    </div>
  )
}
