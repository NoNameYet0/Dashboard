import { Link, NavLink, Outlet } from "react-router-dom";
import FormInput from "../../components/form-input/form-input.component";
import {
  MainContent,
  NavBar,
  NavBarUl,
  SideNavBar,
  SideNavBarList,
} from "./navigation.styles";
import { useState } from "react";

const Navigation = () => {
  const [isSliderActive, setIsSliderActive] = useState(false);

  return (
    <>
      <NavBar>
        <span
          className="side-bar-slider"
          onClick={() => setIsSliderActive(!isSliderActive)}
        >
          Slider
        </span>
        <NavBarUl $active={isSliderActive}>
          <li className="home-link">
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <NavLink to={"trainees"} className={"side-bar-nav-links"}>
              Trainees
            </NavLink>
          </li>
          <li>
            <NavLink to={"equipment"} className={"side-bar-nav-links"}>
              Equipment
            </NavLink>
          </li>
          <li>
            <NavLink to={"sales"} className={"side-bar-nav-links"}>
              Sales
            </NavLink>
          </li>
          <li>
            <NavLink to={"reports"} className={"side-bar-nav-links"}>
              Reports
            </NavLink>
          </li>
          <li>
            <NavLink to={"analytics"} className={"side-bar-nav-links"}>
              Analytics
            </NavLink>
          </li>
          <li>
            <NavLink to={"settings"} className={"side-bar-nav-links"}>
              Settings
            </NavLink>
          </li>
        </NavBarUl>
        <FormInput />
      </NavBar>
      <SideNavBar>
        <SideNavBarList>
          <li className="home-link">
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <NavLink to={"trainees"} className={"side-bar-nav-links"}>
              Trainees
            </NavLink>
          </li>
          <li>
            <NavLink to={"equipment"} className={"side-bar-nav-links"}>
              Equipment
            </NavLink>
          </li>
          <li>
            <NavLink to={"sales"} className={"side-bar-nav-links"}>
              Sales
            </NavLink>
          </li>
          <li>
            <NavLink to={"reports"} className={"side-bar-nav-links"}>
              Reports
            </NavLink>
          </li>
          <li>
            <NavLink to={"analytics"} className={"side-bar-nav-links"}>
              Analytics
            </NavLink>
          </li>
          <li>
            <NavLink to={"settings"} className={"side-bar-nav-links"}>
              Settings
            </NavLink>
          </li>
        </SideNavBarList>
      </SideNavBar>
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  );
};

export default Navigation;
