import styled from "styled-components";
import {
  CenteredColFlexContainer,
  SecondaryColors,
} from "../../styles/general.styles";

export const StyledEnterEmailForm = styled.form`
  ${CenteredColFlexContainer}

  button {
    width: 80%;
    height: 56px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 80%;

    input {
      width: 100%;
    }

    button {
      width: 100%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 80%;

    input {
      width: 100%;
    }

    button {
      width: 90%;
    }
  }

  .back-to-login-button {
    ${SecondaryColors}
    font-size: 1.01em;
    height: 10%;
    width: 50%;
    cursor: pointer;
    text-decoration: underline;

    &:hover {
      outline: none;
      opacity: 0.5;
    }
  }
`;

export const NewPasswordInputsContainer = styled.div`
  ${CenteredColFlexContainer}
  width: 100%;
  gap: 1.5em;
`;
