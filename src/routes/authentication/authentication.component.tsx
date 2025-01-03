import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";

import { AuthContainer, AuthFormsContainer } from "./authentication.styles";

const Authentication = () => {
  return (
    <AuthContainer>
      <AuthFormsContainer>
        <span>Sign in to the Dashboard</span>
        <FormInput label="email" />
        <FormInput label="password" />
        <Button>Sign In</Button>
      </AuthFormsContainer>
    </AuthContainer>
  );
};
export default Authentication;
