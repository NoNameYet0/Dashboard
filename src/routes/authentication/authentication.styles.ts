import styled from "styled-components";
import {
  CenteredFlexContainer,
  SecondaryColors,
} from "../../styles/general.styles";

export const AuthContainer = styled.div`
  ${CenteredFlexContainer}
  height: 100vh;
  position: relative;
`;

export const AuthFormsContainer = styled.div`
  ${CenteredFlexContainer}
  ${SecondaryColors}
  border-radius: 26px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  height: 500px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 550px;
    height: 550px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    border-radius: 0;
  }
`;
