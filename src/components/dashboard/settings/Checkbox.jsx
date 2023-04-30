import React from "react";

export default function Checkbox({ title, isChecked, setCheckedHandler }) {
  return (
    <label className="mb-6 w-1/2 inline-block">
      <input
        type="checkbox"
        name="notifyEmails"
        checked={isChecked}
        onChange={e=>setCheckedHandler(e.target.checked)}
      />
      <span className="ml-2 text-sm font-medium mb-2 text-light-title dark:text-white ">
        {title}
      </span>
    </label>
  );
}
