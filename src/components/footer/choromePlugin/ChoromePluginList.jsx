import React from 'react'


export default function ChoromePluginList({title, children}) {
  return (
    <li className="text-gray-700 dark:text-dark-paragraph flex gap-2">
              
                <div className='w-5 h-5 bg-red-100 rounded-full  flex justify-center items-center text-light-secondary dark:text-dark-secondary'>
                {children}
                </div>
                {title}
              </li>
  )
}
