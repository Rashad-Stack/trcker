import React from "react";
import { Main } from "../../layouts";
import { RegisterForm } from "../../components/Register";
import { FormHeader } from "../../components/ui";

export default function Register() {
  return (
    <Main>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full md:max-w-lg sm:rounded-md shadow-lg break-words bg-light-tertiary dark:bg-dark-tertiary">
          <FormHeader title="Register" />
          <RegisterForm />
        </div>
      </div>
    </Main>
  );
}
