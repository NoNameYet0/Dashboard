import { ButtonHTMLAttributes, ReactNode } from "react";
import "./button.styles";

export type ButtonProps = {
  isLoading?: boolean;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ isLoading, children, ...otherProps }: ButtonProps) => {
  return <button {...otherProps}>{isLoading ? "loading..." : children}</button>;
};

export default Button;
