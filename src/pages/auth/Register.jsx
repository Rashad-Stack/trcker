import React from "react";
import { Main } from "../../layouts";
import { RegisterForm } from "../../components/Register";
import { FormHeader } from "../../components/ui";

export default function Register() {
  return (
    <Main>
      <div className="flex justify-center items-center min-h-screen">
        {/* <div className="sm:container sm:mx-auto sm:max-w-lg pt-12 sm:pt-24 min-h-[calc(100vh-142px)]"> */}
        <div className="w-full md:max-w-lg sm:rounded-md shadow-lg break-words bg-light-tertiary dark:bg-dark-tertiary">
          <FormHeader title="Register" />
          <RegisterForm />
        </div>
      </div>
      {/* </div> */}
    </Main>
  );
}
