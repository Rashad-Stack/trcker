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

export default function TermsConditions() {
  return (
    <Main>
      <section className="relative bg-light-secondary dark:bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex flex-col items-center justify-between  py-20">
          <div className="mb-16 max-w-xl mx-auto text-center">
            <span className="text-pink-600 font-bold font-heading">
              GroupsTracker.com rules
            </span>
            <h2 className="mb-6 text-5xl font-bold font-heading text-light-title dark:text-white">
              Terms of service
            </h2>
          </div>

          <div className="mb-16 flex justify-center space-x-4">
            <button className="inline-block h-2 w-2 bg-pink-600 rounded-full" />
            <button className="inline-block h-2 w-2 bg-pink-600 rounded-full" />
            <button className="inline-block h-2 w-2 bg-pink-600 rounded-full" />
            <button className="inline-block h-2 w-2 bg-pink-600 rounded-full" />
            <button className="inline-block h-2 w-2 bg-pink-600 rounded-full" />
          </div>

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

