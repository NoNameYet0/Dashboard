import EnterCodeForm from "../../components/forget-password-forms/enter-code-form.component";

import {
  AuthContainer,
  AuthFormsContainer,
} from "../authentication/authentication.styles";

const VerifyCode = () => {
  return (
    <AuthContainer>
      <AuthFormsContainer>
        <EnterCodeForm />
      </AuthFormsContainer>
    </AuthContainer>
  );
};
export default VerifyCode;
