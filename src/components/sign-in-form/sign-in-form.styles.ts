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
