import React from 'react'
import { Main } from '../../layouts'
import { FormHeader } from '../../components/ui'
import { LoginForm } from '../../components/Login'

export default function Login() {
  return (
    <Main>
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full md:max-w-lg sm:rounded-md shadow-lg break-words bg-light-tertiary dark:bg-dark-tertiary">
        <FormHeader title="Login" />
        <LoginForm/>
      </div>
    </div>

  </Main>
  )
}
