import { InputHTMLAttributes } from "react";
import "./form-input.styles";

type FormInputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput = ({ label, ...otherProps }: FormInputProps) => {
  return (
    <div>
      <label>
        {label}
        <input {...otherProps} />
      </label>
    </div>
  );
};

export default FormInput;
