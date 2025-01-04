import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import { AuthContainer, AuthFormsContainer } from "./authentication.styles";

const Authentication = () => {
  return (
    <AuthContainer>
      <AuthFormsContainer>
        <SignInForm />
      </AuthFormsContainer>
    </AuthContainer>
  );
};
export default Authentication;
