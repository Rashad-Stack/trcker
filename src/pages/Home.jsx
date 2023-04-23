import React from "react";
import { Main } from "../layouts";
import {
  Competitors,
  Counter,
  Hero,
  HowItWorks,
  PricePlan,
  Reviews,
  Subscription
} from "../components/Home";

export default function Home() {
  return (
    <Main>
      <Hero />
      <HowItWorks />
      <Competitors />
      <Reviews />
      <PricePlan />
      <Counter />
      <Subscription />
    </Main>
  );
}
