import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Please tell us your firs name!"),
  lastName: Yup.string().required("Please tell us your last name!"),
  email: Yup.string()
    .email("Please Provide a valid email!")
    .required("Please Provide your email address!"),
  password: Yup.string()
    .required("Please enter a password!")
        .min(8, "Password must be at least 8 characters long"),
    confirmPassword: Yup.string().oneOf([ Yup.ref("password"), null ], 'Passwords must match').required("Please enter your password again to confirm!")
  
});
