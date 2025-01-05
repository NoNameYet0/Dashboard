import { ReactNode } from "react";
import { ErrorText, StyledErrorCard } from "./error-card.styles";

type ErrorCardProps = {
  children: ReactNode;
};

const ErrorCard = ({ children }: ErrorCardProps) => {
  return (
    <StyledErrorCard>
      <ErrorText>{children}</ErrorText>
    </StyledErrorCard>
  );
};
export default ErrorCard;
