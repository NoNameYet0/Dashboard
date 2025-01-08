import styled from "styled-components";
import {
  CenteredColFlexContainer,
  LargeFontSize,
  XLargeFontSize,
} from "../../styles/general.styles";

export const FormInputContainer = styled.div`
  ${CenteredColFlexContainer}
  width: 350px;
  gap: 0.5em;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 90%;
  }
`;

export const StyledLabel = styled.label`
  ${LargeFontSize}
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    ${XLargeFontSize}
  }
`;

export const AuthInput = styled.input`
  width: 80%;
  height: 3em;
  border-radius: 2em;
  padding: 1em;
  border: 2px solid ${({ theme }) => theme.colors["border-secondary"]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 3.5em;
  }
`;
