import React from "react";

export default function SettingsDropdown({selectedOption,setSelectedOption}) {
  return (
    <div className="relative">
      <select
        className="appearance-none block w-full mb-2 text-sm bg-light-tertiary dark:bg-dark-tertiary form-input leading-relaxed text-light-title dark:text-white border-none  px-3 py-2 outline-none border rounded"
        name="Notifications"
        value={selectedOption}
        onChange={e=>setSelectedOption(e.target.value)}
      >
        <option value={-1} disabled="disabled">
          When new post is found (Enterprise required)
        </option>
        <option value={1}>Once an hour</option>
        <option value={24}>Once a day </option>
        <option value={0}>Never</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-dark-paragraph">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
