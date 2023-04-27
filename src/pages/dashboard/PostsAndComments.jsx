import React from "react";
import { DashboardLayout } from "../../layouts";
import {
  AllGroupsDropdown,
  FoundPost,
  PostFilterButtons
} from "../../components/dashboard/PostAndComments";
import Dots from "../../components/dashboard/PostAndComments/Dots";
import PaginateButton from "../../components/dashboard/PostAndComments/PaginateButton";

export default function PostsAndComments() {
  return (
    <DashboardLayout>
      <div className="mx-auto lg:ml-80">
        <div className="pt-8 px-4">
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
