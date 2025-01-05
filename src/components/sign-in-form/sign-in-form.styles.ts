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
`;

export const StyledSpan = styled.span`
  ${XXLargeFontSize}
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
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
  position: absolute;
  bottom: calc(50vh - 4.5em);
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    opacity: 0.5;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    bottom: calc(50vh - 7em);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: calc(50vh - 4.5em);
  }
`;
