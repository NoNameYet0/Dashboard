import styled from "styled-components";
import {
  CenteredColFlexContainer,
  CenteredFlexContainer,
  SecondaryColors,
} from "../../styles/general.styles";

export const AuthContainer = styled.div`
  ${CenteredFlexContainer}
  height: 100vh;
`;

export const AuthFormsContainer = styled.div`
  ${CenteredColFlexContainer}
  ${SecondaryColors}
  gap: 1em;
  border-radius: 26px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  min-width: 550px;
  height: 50%;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: ${({ theme }) => theme.grid.col5};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    border-radius: 0;
  }
`;
