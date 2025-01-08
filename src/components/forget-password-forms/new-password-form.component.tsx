import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { newPasswordSchema } from "../../utils/yup/yup.utils";
import {
  NewPasswordInputsContainer,
  StyledEnterEmailForm,
} from "./forget-password-forms.styles";
import { ErrorsList } from "../error-list/error-list.styles";
import ErrorCard from "../error-card/error-card.component";
import FormInput from "../form-input/form-input.component";
import { FormInputTypes } from "../form-input/form-input.types";
import Button from "../button/button.component";

type NewPasswordInputs = {
  newPassword: string;
  confirmNewPassword: string;
};

const NewPasswordForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewPasswordInputs>({
    defaultValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
    resolver: yupResolver(newPasswordSchema),
  });

  const onSubmit: SubmitHandler<NewPasswordInputs> = (data) => {
    console.log(data);
    reset();
  };

  const errorsArray = Object.values(errors);

  return (
    <StyledEnterEmailForm onSubmit={handleSubmit(onSubmit)}>
      {errorsArray && (
        <ErrorsList>
          {errorsArray.map((error, index) => (
            <ErrorCard key={index}>{error.message}</ErrorCard>
          ))}
        </ErrorsList>
      )}
      <NewPasswordInputsContainer>
        <FormInput
          formInputType={FormInputTypes.AuthInput}
          label="Enter Your New Password"
          placeholder="enter your new password"
          type="password"
          {...register("newPassword")}
        />
        <FormInput
          formInputType={FormInputTypes.AuthInput}
          label="Confirm your new password"
          placeholder="confirm your new password"
          type="password"
          {...register("confirmNewPassword")}
        />
      </NewPasswordInputsContainer>
      <Button
        onClick={handleSubmit(() => {
          navigate("/");
        })}
      >
        change your password
      </Button>
    </StyledEnterEmailForm>
  );
};
export default NewPasswordForm;
