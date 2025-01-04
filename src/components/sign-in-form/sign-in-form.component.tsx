import Button from "../button/button.component";
import { ButtonTypes } from "../button/button.types";
import FormInput from "../form-input/form-input.component";

import { FormInputTypes } from "../form-input/form-input.types";

import { SignInFormContainer } from "./sign-in-form.styles";

const SignInForm = () => {
  return (
    <SignInFormContainer>
      <span>Sign in to the Dashboard</span>
      <FormInput
        label="email"
        formInputType={FormInputTypes.AuthInput}
        placeholder="enter your email"
      />
      <FormInput
        label="password"
        formInputType={FormInputTypes.AuthInput}
        placeholder="enter your password"
      />
      <Button buttonType={ButtonTypes.basic}>Sign In</Button>
    </SignInFormContainer>
  );
};
export default SignInForm;
