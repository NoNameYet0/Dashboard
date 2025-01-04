import styled from "styled-components";
import {
  CenteredColFlexContainer,
  CenteredFlexContainer,
  LargeFontSize,
  PrimaryColors,
  SecondaryColors,
  XLargeFontSize,
} from "../../styles/general.styles";

export const NavContainer = styled.div`
  display: flex;
  a {
    ${CenteredFlexContainer}
    overflow: hidden;
  }
`;

export const MainContent = styled.div`
  margin: 2em;
  width: calc(${({ theme }) => theme.grid.col10} -4em);
`;

export const NavBar = styled.div`
  ${SecondaryColors}
  ${CenteredFlexContainer}
  ${XLargeFontSize}
  width: ${({ theme }) => theme.grid.col2};
  height: 100vh;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  span {
    display: none;
  }

  .active {
    opacity: 0.5;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    span {
      display: block;
    }

    .svg-to-hide {
      display: none;
    }

    .active {
      opacity: 1;
      ${PrimaryColors}
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 2.2em;
    .svg-to-hide {
      width: 1em;
      height: 1em;
    }
  }
`;

export const SideNavBarList = styled.ul`
  ${CenteredColFlexContainer}
  width: 100%;
  li {
    cursor: pointer;
    margin-bottom: 1em;
    ${CenteredFlexContainer}

    svg {
      width: 1.5em;
      height: 1.5em;
      fill: ${({ theme }) => theme.colors["bg-primary"]};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      &:hover {
        opacity: 0.5;
        font-size: calc(
          ${({ theme }) => theme.typography.fontSize.xlarge} + 0.5px
        );
      }
    }
  }

  .home-link {
    ${LargeFontSize}
    background-color: ${({ theme }) => theme.colors["bg-primary"]};
    border-radius: none;
    height: 3em;
    width: ${({ theme }) => theme.grid.col2};
    position: fixed;
    top: 0;

    svg {
      width: 50%;
      height: auto;
      fill: black;
    }

    height: 6em;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      position: static;
      ${XLargeFontSize}
      height: 3em;
      width: 6em;
      border-radius: 1em;
      margin-bottom: 3em;

      &:hover {
        font-size: calc(
          ${({ theme }) => theme.typography.fontSize.xlarge} + 0.8px
        );
      }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      height: 2.2em;
      width: 2.2em;
      margin-top: 1.5em;
      border-radius: 50%;
      svg {
        width: 1.7em;
      }
    }
  }

  .side-bar-nav-links {
    width: 100%;
    text-align: center;
    padding: 0.55em;
    border-radius: 15px;
  }
`;

export const LinksContainer = styled.div`
  ${CenteredColFlexContainer}
  margin-top: 2.2em;

  li {
    ${CenteredFlexContainer}
    width: 100%;
  }

  a {
    ${CenteredFlexContainer}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: -3em;
  }
`;
