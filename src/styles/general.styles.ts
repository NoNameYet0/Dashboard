import { css } from "styled-components";

export const PrimaryColors = css`
  background-color: ${({ theme }) => theme.colors["bg-primary"]};
  color: ${({ theme }) => theme.colors["font-primary"]};
`;

export const SecondaryColors = css`
  background-color: ${({ theme }) => theme.colors["bg-secondary"]};
  color: ${({ theme }) => theme.colors["font-secondary"]};
`;

export const CenteredFlexContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenteredColFlexContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SmallFontSize = css`
  font-size: ${({ theme }) => theme.typography.fontSize.small};
`;

export const MediumFontSize = css`
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
`;

export const LargeFontSize = css`
  font-size: ${({ theme }) => theme.typography.fontSize.large};
`;

export const XLargeFontSize = css`
  font-size: ${({ theme }) => theme.typography.fontSize.xlarge};
`;

export const XXLargeFontSize = css`
  font-size: ${({ theme }) => theme.typography.fontSize.xxlarge};
`;
