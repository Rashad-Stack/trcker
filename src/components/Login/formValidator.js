import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please Provide a valid email!")
    .required("Please Provide your email address!"),
  password: Yup.string().required("Please enter a password!"),
});
