import React from "react";
import { Aside, DashboardHeader } from "../components/dashboard";
import Main from "../layouts/Main";

export default function DashBoard() {
  return (
    <Main dasboard>
      <Aside />
      <DashboardHeader />
    </Main>
  );
}
