import React from "react";
import { Main } from "../../layouts";
import FooterLinkHeader from "../../components/footer/TermsConditions/FooterLinkHeader";
import GeneralPrivacy from "../../components/footer/privacyPolicy/GeneralPrivacy";
import PersonalDataPrivacy from "../../components/footer/privacyPolicy/PersonalDataPrivacy";
import YourRightsPolicy from "../../components/footer/privacyPolicy/YourRightsPolicy";
import DataRecipientsPolicy from "../../components/footer/privacyPolicy/DataRecipientsPolicy";
import SecurityPolicy from "../../components/footer/privacyPolicy/SecurityPolicy";
import CookiesPolicy from "../../components/footer/privacyPolicy/CookiesPolicy";
import FinalProvisionsPolicy from "../../components/footer/privacyPolicy/FinalProvisionsPolicy";

export default function PrivacyPolicy() {
  return (
    <Main>
      <section className="relative bg-light-secondary dark:bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex flex-col items-center justify-between  py-20">
          <FooterLinkHeader title="Terms" subtitle="Privacy policy" />
          <div className="max-w-3xl mx-auto">
          <ul className="space-y-4 lg:space-y-6">
            <GeneralPrivacy />
            <PersonalDataPrivacy />
            <YourRightsPolicy />
            <DataRecipientsPolicy />
            <SecurityPolicy />
            <CookiesPolicy />
            <FinalProvisionsPolicy />

          </ul>
          </div>
        </div>
      </section>
    </Main>
  );
}
