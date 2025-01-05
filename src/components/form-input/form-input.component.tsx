import { forwardRef, InputHTMLAttributes } from "react";

import { FormInputTypes } from "./form-input.types";

import {
  FormInputContainer,
  AuthInput,
  StyledLabel,
} from "./form-input.styles";

const getFormInput = (formInputType: FormInputTypes) =>
  ({ [FormInputTypes.AuthInput]: AuthInput }[formInputType]);

type FormInputProps = {
  label?: string;
  formInputType: FormInputTypes;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, formInputType, ...otherProps }, ref) => {
    const SelectedFormInput = getFormInput(formInputType);
    return (
      <FormInputContainer>
        {label && <StyledLabel htmlFor={label}>{label}</StyledLabel>}
        <SelectedFormInput {...otherProps} id={label} ref={ref} />
      </FormInputContainer>
    );
  }
);

export default FormInput;
