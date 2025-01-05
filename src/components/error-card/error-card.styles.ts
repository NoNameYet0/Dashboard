import styled from "styled-components";
import { LargeFontSize } from "../../styles/general.styles";

export const StyledErrorCard = styled.div`
  border: 3px solid ${({ theme }) => theme.colors["fail-color"]};
  border-radius: 1em;
  margin-top: 1em;
  padding: 1em;
`;

export const ErrorText = styled.p`
  ${LargeFontSize}
  color: ${({ theme }) => theme.colors["fail-color"]};
`;
