import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

import { validationSchema } from "./formValidator";
import { SubmitButton } from "../ui";

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false
    },
    validationSchema,
    onSubmit(values, { resetForm }) {
      console.log(values);

      resetForm();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col p-4 gap-6">
      <div>
        <input
          id="email"
          type="email"
          placeholder="E-Mail Address"
          {...formik.getFieldProps("email")}
          className="bg-[#DFE3E8] dark:bg-[#161C24] form-input leading-relaxed text-[#161C24] dark:text-white border-none w-full  px-3 py-2 text-base rounded-md"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-400">{formik.errors.email}</div>
        )}
      </div>
      <div>
        <input
          id="password"
          type="password"
          placeholder="password"
          {...formik.getFieldProps("password")}
          className="bg-[#DFE3E8] dark:bg-[#161C24] form-input leading-relaxed text-[#161C24] dark:text-white border-none w-full  px-3 py-2 text-base rounded-md"
        />
        {formik.touched.password && formik.errors.password && (
          <div className="text-red-400">{formik.errors.password}</div>
        )}
      </div>
      <div className="flex justify-between">
        <label
          htmlFor="remember"
          className="text-gray-700 dark:text-dark-paragraph flex flex-row-reverse gap-2 text-base"
        >
          Remember Me
          <input
            id="remember"
            type="checkbox"
            {...formik.getFieldProps("remember")}
          />
        </label>
        <Link to="/resetPass" className="text-primary hover:underline">
          Forgot Your Password?
        </Link>
      </div>
      <SubmitButton title="Login" colored />
      <p className="text-center text-gray-700 dark:text-dark-paragraph">
        Dont&apos; have an account?{" "}
        <Link to="/register" className="text-primary hover:underline">
          Register
        </Link>
      </p>
    </form>
  );
}
