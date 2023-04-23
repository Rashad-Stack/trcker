import React from "react";
import { Main } from "../layouts";
import { Competitors, Hero, HowItWorks, PricePlan, Reviews } from "../components/Home";

export default function Home() {
  return (
    <Main>
      <Hero />
      <HowItWorks />
      <Competitors />
      <Reviews />
      <PricePlan/>
    </Main>
  );
}
