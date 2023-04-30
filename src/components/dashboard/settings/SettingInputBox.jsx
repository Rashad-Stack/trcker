import React from "react";

export default function SettingInputBox({
  title,
  value,
  setValue,
  placeholder
}) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-dark-paragraph">
        {title}
      </label>
      <input
        className="block w-full px-4 py-3 text-sm placeholder-gray-500 bg-light-tertiary dark:bg-dark-tertiary rounded outline-none text-gray-700 dark:text-dark-paragraph"
        type="text"
        name="hostSMTP"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
