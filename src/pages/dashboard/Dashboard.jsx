import React from "react";
import { DashboardMain } from "../../components/dashboard";
import { DashboardLayout } from "../../layouts";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardMain />
    </DashboardLayout>
  );
}
