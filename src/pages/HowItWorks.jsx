import React from "react";
import { Main } from "../layouts";
import {
    Comments,
  EasySetup,
  QuicNotification,
  SignupSection
} from "../components/HowItWorks";
import { Reviews } from "../components/Home";

export default function HowItWorks() {
  return (
    <Main>
      <EasySetup />
      <QuicNotification />
      <Reviews />
      <SignupSection />
      <Comments />
    </Main>
  );
}
