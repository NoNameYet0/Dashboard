import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { enterVerificationCodeSchema } from "../../utils/yup/yup.utils";
import { StyledEnterEmailForm } from "./forget-password-forms.styles";
import { ErrorsList } from "../error-list/error-list.styles";
import ErrorCard from "../error-card/error-card.component";
import FormInput from "../form-input/form-input.component";
import { FormInputTypes } from "../form-input/form-input.types";
import Button from "../button/button.component";

type EnterCodeInput = {
  code: number;
};

const EnterCodeForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EnterCodeInput>({
    resolver: yupResolver(enterVerificationCodeSchema),
  });

  const onSubmit: SubmitHandler<EnterCodeInput> = (data) => {
    console.log(data);
    reset();
  };

  const errorsArray = Object.values(errors);

  return (
    <StyledEnterEmailForm onSubmit={handleSubmit(onSubmit)}>
      {errorsArray && (
        <ErrorsList>
          {errorsArray.map((error, index) => (
            <ErrorCard key={index}>
              {error.type} code must be a number{" "}
            </ErrorCard>
          ))}
        </ErrorsList>
      )}

      <FormInput
        formInputType={FormInputTypes.AuthInput}
        label="Enter Verifivation Code"
        placeholder="enter verification code"
        {...register("code")}
        maxLength={6}
      />
      <Button
        onClick={handleSubmit(() => {
          navigate("/new-password");
        })}
      >
        verify
      </Button>
      <Button
        className="back-to-login-button"
        type="button"
        onClick={() => navigate("/auth")}
      >
        Back to login
      </Button>
    </StyledEnterEmailForm>
  );
};
export default EnterCodeForm;
