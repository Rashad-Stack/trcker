import React from "react";

export default function PersonalDataPrivacy() {
  return (
    <li className="p-6 text-gray-700 dark:text-dark-paragraph rounded shadow-xl">
      <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
        <span className="text-xl">Processing of personal data</span>
      </button>
      <p className="hidden mt-4 text-gray-700 dark:text-dark-paragraph font-normal leading-loose"> </p>
      <ol
        className="mt-4 text-gray-700 dark:text-dark-paragraph text-sm font-normal leading-loose"
        style={{ "listStyle": "decimal", margin: "1rem" }}
      >
        {" "}
        <li className="text-gray-700 dark:text-dark-paragraph">
          We may process Your personal data collected via Website, in particular
          available forms, for purpose of:
          <ol
            className="mt-4 text-gray-700 dark:text-dark-paragraph text-sm font-normal leading-loose"
            style={{ "listStyle": "decimal", margin: "1rem" }}
          >
            {" "}
            <li className="text-gray-700 dark:text-dark-paragraph">
              performance of a contract to which you are a party in connection
              with purchase of our service or in order to take steps at your
              request prior to entering into service purchase contract - with
              respect to users of the Website who registered an account or used
              a service through the Website (Article 6 (1) (b) of Regulation on
              the protection of natural persons with regard to the processing of
              personal data and on the free movement of such data, and repealing
              Directive 95/46/EC (Data Protection Directive) (“GDPR”)),
            </li>
            <li className="text-gray-700 dark:text-dark-paragraph">
              reply to your inquiry made by email or contact form, including
              inquiries related to Controller’s business, his offer or any
              clarifications thereto as well as terms of cooperation (Art. 6.1.a
              of the GDPR);
            </li>
            <li className="text-gray-700 dark:text-dark-paragraph">
              fulfilling a request that You are making to contact You or receive
              information on our offer, upon your consent (Art. 6.1.a of the
              GDPR);
            </li>
            <li className="text-gray-700 dark:text-dark-paragraph">
              marketing, including sending a newsletter, as our legitimate
              interest. Such information shall only be send to you upon your
              consent for electronic communication (Art. 6.1.f of GDPR);
            </li>
          </ol>
        </li>
        <li className="text-gray-700 dark:text-dark-paragraph">
          for archival (evidence) purposes, which are the implementation of our
          legitimate interest in securing information in the event of a legal
          need to prove facts (Art. 6.1.f of GDPR);
        </li>
        <li className="text-gray-700 dark:text-dark-paragraph">
          for analytical purposes (better selection of services to the needs of
          our clients, optimization of service processes, building knowledge
          about our clients, etc.) being the implementation of our legitimate
          interest in this interest (Art. 6.1.f of GDPR);
        </li>
        <li className="text-gray-700 dark:text-dark-paragraph">
          determining, claiming of protecting our claims related to the use of
          the Website, as our legitimate interest (Art. 6.1.f of GDPR)
        </li>
        <li className="text-gray-700 dark:text-dark-paragraph">
          Providing Your personal data is voluntary, but necessary to perform
          the contract you are a party to, fulfill Your request to contact
          Yourself or receive information materials. You have the right to
          withdraw Your consent at any time, but its withdrawal does not affect
          the right to process Your personal data while such consent is granted.
        </li>
        <li className="text-gray-700 dark:text-dark-paragraph">
          In addition, you have the right to object to the processing of your
          data, which we process as our legitimate interest. In this case, we
          will stop processing your personal data, unless we can demonstrate
          that there are valid legally valid grounds for us in relation to this
          data, which override your interests, rights and freedoms, or the data
          will be necessary for a possible determination, investigation or
          defense of claims.
        </li>
        <li className="text-gray-700 dark:text-dark-paragraph">
          List of processed personal data:{" "}
          <ol className="text-gray-700 dark:text-dark-paragraph">
            {" "}
            <li className="text-gray-700 dark:text-dark-paragraph">
              <b>e-mail </b>
              <ol className="ml-4 text-gray-700 dark:text-dark-paragraph">
                <li className="text-gray-700 dark:text-dark-paragraph">
                  necessary to set up an account and log in to the system, and
                  send notifications
                </li>
                <li className="text-gray-700 dark:text-dark-paragraph">stored in the database for 5 years</li>
                <li className="text-gray-700 dark:text-dark-paragraph">
                  can be checked or deleted by the user at any time (request by
                  e-mail: info@groupstracker.com, contact form www:
                  groupstracker.com/contact)
                </li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
      <p />
    </li>
  );
}
