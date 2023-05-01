import React from "react";
import { Main } from "../../layouts";
import { Comments } from "../../components/HowItWorks";
import PhantombusterAbout from "../../components/footer/alternativePhantombuster/PhantombusterAbout";
import Safety from "../../components/footer/alternativePhantombuster/Safety";
import DesignedFbGroup from "../../components/footer/alternativePhantombuster/DesignedFbGroup";
import EasierUse from "../../components/footer/alternativePhantombuster/EasierUse";
import FreePlan from "../../components/footer/alternativePhantombuster/FreePlan";
import FbGroupsTracking from "../../components/footer/alternativePhantombuster/FbGroupsTracking";

export default function AlternativePhantombuster() {
  return (
    <Main>
      <section className="relative bg-light-secondary dark:bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex flex-col items-center justify-between  py-20">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="mb-2 text-4xl lg:text-6xl font-bold font-heading text-light-title dark:text-white">
              Alternative to Phantombuster.com
            </h1>
            <p className="mb-8 text-gray-700 dark:text-dark-paragraph leading-loose">
              Do you want to find better or cheaper alternative to
              Phantombuster.com?{" "}
            </p>{" "}
          </div>

        <PhantombusterAbout />
        <Safety />
        <DesignedFbGroup />
        <EasierUse />
        <FreePlan />
        <FbGroupsTracking />


        </div>
        <Comments />
      </section>
    </Main>
  );
}
