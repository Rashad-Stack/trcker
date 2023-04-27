import React from "react";

export default function MembersTable() {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="text-xs text-gray-700 dark:text-dark-paragraph text-left">
          <th className="pb-3 font-medium">Member</th>
          <th className="text-right pb-3 font-medium">Groups</th>
          <th className="text-right pb-3 font-medium">Posts</th>
          <th className="text-right pb-3 font-medium">Comments</th>
          <th className="text-right pb-3 font-medium">Baned</th>
          <th className="text-right pb-3 font-medium">Bans counter</th>
          <th className="text-right pb-3 font-medium">Action</th>
        </tr>
      </thead>
      <tbody />
    </table>
  );
}
