import React from 'react'

export default function ListItem({title,description}) {
  return (
    <li className="flex mb-4">
    <div>
      <svg
        className="mr-3 w-8 h-8 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
    </div>
    <div className="max-w-xs">
      <h3 className="text-light-title dark:text-white font-bold font-heading">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-dark-paragraph leading-loose">
       {description}
      </p>
    </div>
  </li>
  )
}
