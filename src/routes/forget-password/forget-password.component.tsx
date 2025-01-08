import EnterEmailForm from "../../components/forget-password-forms/enter-email-form.component";
import { AuthContainer, AuthFormsContainer } from "../authentication/authentication.styles";

const ForgetPassword = () => {
  return (
    <AuthContainer>
      <AuthFormsContainer>
        <EnterEmailForm />
      </AuthFormsContainer>
    </AuthContainer>
  );
};
export default ForgetPassword;
