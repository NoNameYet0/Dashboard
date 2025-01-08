import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { FormInputTypes } from "../form-input/form-input.types";
import { StyledEnterEmailForm } from "./forget-password-forms.styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { enterEmailForForgetPasswordSchema } from "../../utils/yup/yup.utils";
import { ErrorsList } from "../error-list/error-list.styles";
import ErrorCard from "../error-card/error-card.component";

type EnterEmailInput = {
  email: string;
};

const EnterEmailForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EnterEmailInput>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(enterEmailForForgetPasswordSchema),
  });

  const onSubmit: SubmitHandler<EnterEmailInput> = (data) => {
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
      <FormInput
        formInputType={FormInputTypes.AuthInput}
        label="Enter Your Email"
        placeholder="enter your email"
        {...register("email")}
      />
      <Button
        onClick={handleSubmit(() => {
          navigate("/verify-code");
        })}
      >
        Send verification code
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
export default EnterEmailForm;
