import React from "react";
import { Main } from "../../layouts";
import GeneralTerms from "../../components/footer/TermsConditions/GeneralTerms";
import Definitions from "../../components/footer/TermsConditions/Definitions";
import Registration from "../../components/footer/TermsConditions/Registration";
import Services from "../../components/footer/TermsConditions/Services";
import TechnicalService from "../../components/footer/TermsConditions/TechnicalService";
import Intellectual from "../../components/footer/TermsConditions/Intellectual";
import Conditions from "../../components/footer/TermsConditions/Conditions";
import Liability from "../../components/footer/TermsConditions/Liability";
import AgreementService from "../../components/footer/TermsConditions/AgreementService";
import Complaint from "../../components/footer/TermsConditions/Complaint";
import FinalProvisions from "../../components/footer/TermsConditions/FinalProvisions";
import FooterLinkHeader from "../../components/footer/TermsConditions/FooterLinkHeader";

export default function TermsConditions() {
  return (
    <Main>
      <section className="relative bg-light-secondary dark:bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex flex-col items-center justify-between  py-20">
          <FooterLinkHeader title="GroupsTracker.com rules" subtitle="Terms of service" />
          <GeneralTerms />
          <Definitions />
          <Registration />
          <Services />
          <TechnicalService />
          <Intellectual />
          <Conditions />
          <Liability />
          <AgreementService />
          <Complaint />
          <FinalProvisions />
        </div>
      </section>
    </Main>
  );
}

