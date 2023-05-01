import React from "react";
import { Main } from "../../layouts";
import { Comments } from "../../components/HowItWorks";
import AlternativeAbout from "../../components/footer/alternativeGroouply/AlternativeAbout";
import MuchLowerPrice from "../../components/footer/alternativeGroouply/MuchLowerPrice";
import FreePlanDemo from "../../components/footer/alternativeGroouply/FreePlanDemo";
import GreatKeywords from "../../components/footer/alternativeGroouply/GreatKeywords";
import FairCompetition from "../../components/footer/alternativeGroouply/FairCompetition";
import FbGroups from "../../components/footer/alternativeGroouply/FbGroups";

export default function Alternative() {
  return (
    <Main>
      <section className="relative bg-light-secondary dark:bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex flex-col items-center justify-between  py-20">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="mb-2 text-4xl lg:text-6xl font-bold font-heading text-light-title dark:text-white">
              Alternative to Groouply.com
            </h1>
            <p className="mb-8 text-gray-700 dark:text-dark-paragraph leading-loose">
              Are you looking for better or cheaper service then Groouply.com?{" "}
            </p>{" "}
          </div>
        <AlternativeAbout />
        <MuchLowerPrice />
        <FreePlanDemo />
        <GreatKeywords />
        <FairCompetition />
        <FbGroups />

    




  


        </div>
        <Comments />
      </section>
    </Main>
  );
}
