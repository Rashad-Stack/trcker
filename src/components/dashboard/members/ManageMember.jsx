import React, { useState } from "react";
import FilterButton from "./FilterButton";
import MembersTable from "./MembersTable";
import EnterprisePlanAlert from "./EnterprisePlanAlert";

export default function ManageMember() {
  const [active, setActive] = useState({ filter: "unBloke" });

  return (
    <div className="my-8">
      <div className="flex items-center gap-2">
        <FilterButton
          title="Members of the group (0)"
          active={active.filter === "unBloke"}
          filter={() => setActive({ filter: "unBloke" })}
        />
        <FilterButton
          title="Blocked members (0)"
          active={active.filter === "blocked"}
          filter={() => setActive({ filter: "blocked" })}
        />
      </div>
      <div className="p-4 mb-6 bg-light-tertiary dark:bg-dark-tertiary shadow-xl rounded mt-8">
        {/* Use this component for subscribe Enterprise plan alert */}
        {/* <EnterprisePlanAlert /> */}
        <MembersTable />
      </div>
    </div>
  );
}
