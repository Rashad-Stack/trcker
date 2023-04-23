import React from 'react'

export default function ListItem({title,count,last}) {
  return (
    <div className={`py-4 w-full md:w-1/2 lg:w-1/4 border-b md:border-b-0 lg:border-r border-gray-200 dark:border-gray-700 ${last?"border-none":"border-b md:border-b-0 lg:border-r border-gray-200 dark:border-gray-700"}`}>
    <h4 className="mb-2 text-gray-700  dark:text-dark-paragraph">
      {title}
    </h4>
    <span className="text-light-title dark:text-white text-3xl lg:text-4xl font-bold">
      {count}
    </span>
  </div>
  )
}
