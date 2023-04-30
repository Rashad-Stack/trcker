import React from 'react'

export default function FooterLinkHeader({title, subtitle}) {
  return (
    <>
        <div className="mb-16 max-w-xl mx-auto text-center">
            <span className="text-primary font-bold font-heading">
              {title}
            </span>
            <h2 className="mb-6 text-5xl font-bold font-heading text-light-title dark:text-white">
              {subtitle}
            </h2>
          </div>
          <div className="mb-16 flex justify-center space-x-4">
            <button className="inline-block h-2 w-2 bg-primary rounded-full" />
            <button className="inline-block h-2 w-2 bg-primary rounded-full" />
            <button className="inline-block h-2 w-2 bg-primary rounded-full" />
            <button className="inline-block h-2 w-2 bg-primary rounded-full" />
            <button className="inline-block h-2 w-2 bg-primary rounded-full" />
          </div>
    </>
  )
}
