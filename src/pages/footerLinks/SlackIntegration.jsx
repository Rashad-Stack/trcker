import React from "react";
import { Comments } from "../../components/HowItWorks";
import Main from "../../layouts/Main";
import {
  FacebookGroupToSlack,
  FewEasyStep,
  HowItWorks
} from "../../components/footer";

export default function SlackIntegration() {
  return (
    <Main>
      <section className="relative bg-light-secondary dark:bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex flex-col items-center justify-between  py-20">
          <FacebookGroupToSlack />
          <FewEasyStep />
          <HowItWorks />
        </div>
        <Comments />
      </section>
    </Main>
  );
}
