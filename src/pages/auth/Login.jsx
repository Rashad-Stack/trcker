import React from 'react'
import { Main } from '../../layouts'
import { FormHeader } from '../../components/ui'
import { LoginForm } from '../../components/Login'

export default function Login() {
  return (
    <Main>
       <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full md:max-w-lg sm:rounded-md shadow-lg break-words bg-light-tertiary dark:bg-dark-tertiary">
        <FormHeader title="Login" />
        <LoginForm/>
      </div>
    </div>
    </section>
  </Main>
  )
}
