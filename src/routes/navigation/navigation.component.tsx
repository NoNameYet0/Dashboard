import { Link, NavLink, Outlet } from "react-router-dom";

import GymIcon from "../../assets/gym-weights-icon.svg?react";
import TraineeIcon from "../../assets/trainee.svg?react";
import EquipmentIcon from "../../assets/equipment.svg?react";
import SalesIcon from "../../assets/sales.svg?react";
import ReportsIcon from "../../assets/reports.svg?react";
import AnalyticsIcone from "../../assets/analytics.svg?react";
import SettingsIcon from "../../assets/settings.svg?react";

import {
  MainContent,
  NavContainer,
  NavBar,
  SideNavBarList,
  LinksContainer,
} from "./navigation.styles";

const Navigation = () => {
  return (
    <NavContainer>
      <NavBar>
        <SideNavBarList>
          <li className="home-link">
            <Link to={"/"}>
              <GymIcon />
            </Link>
          </li>
          <LinksContainer>
            <li>
              <NavLink to={"trainees"} className={"side-bar-nav-links"}>
                <TraineeIcon className="svg-to-hide" />
                <span>Trainees</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"equipment"} className={"side-bar-nav-links"}>
                <EquipmentIcon className="svg-to-hide" />
                <span>Equipment</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"sales"} className={"side-bar-nav-links"}>
                <SalesIcon className="svg-to-hide" />
                <span>Sales</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"reports"} className={"side-bar-nav-links"}>
                <ReportsIcon className="svg-to-hide" />
                <span>Reports</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"analytics"} className={"side-bar-nav-links"}>
                <AnalyticsIcone className="svg-to-hide" />
                <span>Analytics</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"settings"} className={"side-bar-nav-links"}>
                <SettingsIcon className="svg-to-hide" />
                <span>Settings</span>
              </NavLink>
            </li>
          </LinksContainer>
        </SideNavBarList>
      </NavBar>
      <MainContent>
        <Outlet />
      </MainContent>
    </NavContainer>
  );
};

export default Navigation;
