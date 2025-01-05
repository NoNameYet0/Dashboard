import styled from "styled-components";
import {
  CenteredColFlexContainer,
  XXLargeFontSize,
} from "../../styles/general.styles";

export const SignInFormContainer = styled.form`
  ${CenteredColFlexContainer}
  gap: 1.5em;
  width: 100%;
  height: 100%;
  span {
    ${XXLargeFontSize}
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    display: none;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      display: block;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      display: none;
    }
  }
`;

export const ErrorsList = styled.div`
  position: absolute;
  top: 2em;
  left: 2em;
  width: 300px;
  height: 10em;
  padding: 1em;
`;

export const ForgetPasswordText = styled.p`
  color: black;
  position: absolute;
  bottom: 28%;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    opacity: 0.5;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    bottom: 14.5%;
  }
`;
