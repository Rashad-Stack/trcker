import React from "react";
import Main from "../layouts/Main";
import { Counter, PricePlan } from "../components/Home";

export default function Price() {
  return (
    <Main>
      <PricePlan />
      <Counter />
    </Main>
  );
}
