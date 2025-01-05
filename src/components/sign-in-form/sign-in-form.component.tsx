import { useForm, SubmitHandler } from "react-hook-form";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { FormInputTypes } from "../form-input/form-input.types";
import { ButtonTypes } from "../button/button.types";

import {
  ErrorsList,
  ForgetPasswordText,
  SignInFormContainer,
} from "./sign-in-form.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/yup/yup.utils";
import ErrorCard from "../error-card/error-card.component";
import { useNavigate } from "react-router-dom";

type SignInInputs = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const navigate = useNavigate();

  const goToForgetPasswordPage = () => {
    navigate("/forget-password");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<SignInInputs> = (data) => {
    console.log(data);
    reset();
  };

  const errorsArray = Object.values(errors);
  console.log(errorsArray);

  return (
    <SignInFormContainer onSubmit={handleSubmit(onSubmit)}>
      <ErrorsList>
        {errorsArray.map((error, index) => (
          <ErrorCard key={index}>{error.message}</ErrorCard>
        ))}
      </ErrorsList>
      <span>Sign in to the Dashboard</span>
      <FormInput
        label="email"
        formInputType={FormInputTypes.AuthInput}
        placeholder="enter your email"
        {...register("email")}
      />
      <FormInput
        label="password"
        type="password"
        formInputType={FormInputTypes.AuthInput}
        placeholder="enter your password"
        {...register("password")}
      />
      <ForgetPasswordText onClick={goToForgetPasswordPage}>
        Forgot Password?
      </ForgetPasswordText>
      <Button buttonType={ButtonTypes.basic} type="submit">
        Sign In
      </Button>
    </SignInFormContainer>
  );
};
export default SignInForm;
