import React from "react";
import { Aside, DashboardHeader, DashboardMain } from "../components/dashboard";
import Main from "../layouts/Main";

export default function DashBoard() {
  return (
    <Main dasboard>
      <Aside />
      <DashboardHeader />
      <DashboardMain />
    </Main>
  );
}
