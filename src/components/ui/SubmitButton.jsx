import React from 'react'

export default function SubmitButton({title,colored}) {
  return (
    <button type='submit' className={`inline-block py-2 px-6   font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200 ${colored?"bg-primary text-white":"bg-gray-300 text-black"}`}>
    {title}
  </button>
  )
}
