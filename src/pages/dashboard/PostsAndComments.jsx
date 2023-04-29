import React from "react";
import { DashboardLayout } from "../../layouts";
import {
  FoundPost,
  PostFilterButtons
} from "../../components/dashboard/PostAndComments";
import {
  AllGroupsDropdown,
  Dots,
  PaginateButton
} from "../../components/dashboard";

export default function PostsAndComments() {
  return (
    <DashboardLayout>
      <div className="mx-auto lg:ml-80">
        <div className="container mx-auto pt-8">
          <FoundPost />
          <div className="flex flex-wrap items-center justify-between text-sm text-center py-8">
            <AllGroupsDropdown />
            <PostFilterButtons />
          </div>
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
