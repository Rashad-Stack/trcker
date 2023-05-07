import React from "react";
import { Main } from "../../layouts";
import { Comments } from "../../components/HowItWorks";
import HowDoesWork from "../../components/footer/faqSection/HowDoesWork";
import PrivateGroups from "../../components/footer/faqSection/PrivateGroups";
import FacebookAccount from "../../components/footer/faqSection/FacebookAccount";
import TurnedOn from "../../components/footer/faqSection/TurnedOn";

export default function Faq() {
  return (
    <Main>
      <section className="relative bg-light-secondary dark:bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex flex-col items-center justify-between  py-20">
          <div className="max-w-xl mx-auto text-center">
            <div className="mb-16 max-w-xl mx-auto px-4 text-center">
              <span className="text-primary font-bold">Help</span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading text-light-title dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>
          </div>
          <HowDoesWork />
          <PrivateGroups />
          <FacebookAccount />
          <TurnedOn />
        </div>
        <Comments />
      </section>
    </Main>
  );
}
