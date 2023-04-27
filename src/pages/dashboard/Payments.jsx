import React from "react";
import { DashboardLayout } from "../../layouts";
import { PricePlan } from "../../components/Home";

export default function Payments() {
  return (
    <DashboardLayout>
      <div className="mx-auto lg:ml-80">
        <div className="container mx-auto">
          <h2 className="text-light-title dark:text-white mt-4 mb-4 text-2xl font-bold">
            Choose your plan:
          </h2>
          <PricePlan dashboard />
        </div>
      </div>
    </DashboardLayout>
  );
}
