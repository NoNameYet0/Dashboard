import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../navigation/navigation.component";

export const Layout = () => {
  const location = useLocation();
  const isAuthRoute = location.pathname.startsWith("/auth");

  return (
    <>
      {!isAuthRoute && <Navigation />}
      <Outlet />
    </>
  );
};
