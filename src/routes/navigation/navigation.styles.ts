import styled from "styled-components";
import {
  CenteredColFlexContainer,
  CenteredFlexContainer,
  LargeFontSize,
  PrimaryColors,
  SecondaryColors,
  XLargeFontSize,
} from "../../styles/general.styles";

export const MainContent = styled.div`
  position: absolute;
  z-index: -1;
  top: 10vh;
  left: ${({ theme }) => theme.grid.col2};
  margin: 1.5em;
  width: calc(${({ theme }) => theme.grid.col10} - 3em);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    left: 0;
  }
`;

export const NavBar = styled.div`
  ${SecondaryColors}
  position: absolute;
  top: 0;
  width: ${({ theme }) => theme.grid.col12};
  height: 10vh;
  ${CenteredFlexContainer}
  ${LargeFontSize}
  justify-content: space-around;

  .side-bar-slider {
    display: none;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }

  ul {
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    .side-bar-slider {
      display: block;
    }
  }
`;

export const NavBarUl = styled.ul<{ $active: boolean }>`
  display: none;
  position: absolute;
  z-index: 20px;
  ${SecondaryColors}
  left: 0;
  top: 10vh;
  height: 100vh;
  width: 35%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ $active }) => ($active ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

export const SideNavBar = styled.div`
  z-index: 1;
  ${SecondaryColors}
  position: absolute;
  top: 0;
  width: ${({ theme }) => theme.grid.col2};
  height: 100vh;
  ${CenteredFlexContainer}
  ${LargeFontSize}

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const SideNavBarList = styled.ul`
  ${CenteredColFlexContainer}
  width: 100%;
  li {
    width: 100%;
    cursor: pointer;
    margin-bottom: 1em;
    ${CenteredFlexContainer}
    &:hover {
      opacity: 0.5;
      font-size: calc(
        ${({ theme }) => theme.typography.fontSize.large} + 0.5px
      );
    }
  }

  .home-link {
    ${XLargeFontSize}
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    position: absolute;
    top: 2.5vh;

    &:hover {
      font-size: calc(
        ${({ theme }) => theme.typography.fontSize.xlarge} + 0.8px
      );
    }
  }
  .side-bar-nav-links {
    width: 80%;
    text-align: center;
    padding: 0.5em;
    border-radius: 12px;
  }

  .active {
    ${PrimaryColors}
  }
`;
