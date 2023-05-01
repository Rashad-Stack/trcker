import React from "react";
import { DashboardLayout } from "../../layouts";
import {
  AllGroupsDropdown,
  Dots,
  PaginateButton
} from "../../components/dashboard";
import { ManageMember } from "../../components/dashboard/members";

export default function Members() {
  return (
    <DashboardLayout>
      <div className="mx-auto lg:ml-80 px-8">
        <div className="container mx-auto">
          <h2 className="text-light-title dark:text-white mt-4 mb-4 text-2xl font-bold">
            Members of the groups
          </h2>
          <AllGroupsDropdown />

          <ManageMember />

          <div className="w-full flex justify-center items-center gap-2 py-8">
            <Dots pagination={() => null} />
            <PaginateButton number="1" active pagination={() => null} />
            <PaginateButton number="2" pagination={() => null} />
            <Dots />
            <PaginateButton number=">" pagination={() => null} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
