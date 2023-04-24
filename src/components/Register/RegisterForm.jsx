import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

import { validationSchema } from "./formValidator";
import { SubmitButton } from "../ui";

export default function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
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
          id="firstName"
          type="text"
          placeholder="First Name"
          {...formik.getFieldProps("firstName")}
          className="bg-[#DFE3E8] dark:bg-[#161C24] form-input leading-relaxed text-[#161C24] dark:text-white border-none w-full  px-3 py-2 text-base rounded-md"
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <div className="text-red-400">{formik.errors.firstName}</div>
        )}
      </div>

      <div>
        <input
          id="lastName"
          type="text"
          placeholder="Last Name"
          {...formik.getFieldProps("lastName")}
          className="bg-[#DFE3E8] dark:bg-[#161C24] form-input leading-relaxed text-[#161C24] dark:text-white border-none w-full  px-3 py-2 text-base rounded-md"
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <div className="text-red-400">{formik.errors.lastName}</div>
        )}
      </div>

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

      <div>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          {...formik.getFieldProps("confirmPassword")}
          className="bg-[#DFE3E8] dark:bg-[#161C24] form-input leading-relaxed text-[#161C24] dark:text-white border-none w-full  px-3 py-2 text-base rounded-md"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div className="text-red-400">{formik.errors.confirmPassword}</div>
        )}
      </div>

      <SubmitButton title="Register" colored />

      <p className="text-center text-gray-700 dark:text-dark-paragraph">
        Already have an account? {" "}
        <Link to="/login" className="text-primary hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}
