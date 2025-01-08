import styled from "styled-components";
import { LargeFontSize } from "../../styles/general.styles";

export const StyledErrorCard = styled.div`
  border-radius: 1em;
  margin-top: 1em;
`;

export const ErrorText = styled.p`
  ${LargeFontSize}
  background-color:${({ theme }) => theme.colors["fail-color"]};
  color: white;
  padding: 0.2em;
  border-radius: 8px;
`;
