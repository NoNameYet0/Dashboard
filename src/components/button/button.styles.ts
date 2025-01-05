import styled from "styled-components";
import { LargeFontSize, XLargeFontSize } from "../../styles/general.styles";

export const BasicButton = styled.button`
  ${LargeFontSize}
  width: 80%;
  height: 10%;
  border-radius: 2em;
  border: none;
  margin-top: 2em;

  &:hover {
    border: 3px solid black;
    opacity: 0.8;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    ${XLargeFontSize}
    width: 80%;
    height: 2.5em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 72%;
  }
`;
