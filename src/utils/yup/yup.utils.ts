import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("it must be an email")
    .required("email is required"),
  password: yup
    .string()
    .max(32, "password can't exceed 32 characters")
    .required("password is required"),
});

export const enterEmailForForgetPasswordSchema = yup.object().shape({
  email: yup.string().email("it must be an email").required(),
});

export const enterVerificationCodeSchema = yup.object().shape({
  code: yup.number().required(),
});

export const newPasswordSchema = yup.object().shape({
  newPassword: yup.string().required("enter your new password"),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Please enter your new password again"),
});
