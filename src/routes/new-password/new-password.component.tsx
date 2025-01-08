import NewPasswordForm from "../../components/forget-password-forms/new-password-form.component";
import {
  AuthContainer,
  AuthFormsContainer,
} from "../authentication/authentication.styles";

const NewPassword = () => {
  return (
    <AuthContainer>
      <AuthFormsContainer>
        <NewPasswordForm />
      </AuthFormsContainer>
    </AuthContainer>
  );
};
export default NewPassword;
