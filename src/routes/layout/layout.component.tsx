import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../navigation/navigation.component";

export const Layout = () => {
  const location = useLocation();
  const isAuthRoute = location.pathname.startsWith("/auth");
  const isForgetPasswordRoute =
    location.pathname.startsWith("/forget-password");

  return (
    <>
      {!isAuthRoute && !isForgetPasswordRoute && <Navigation />}
      <Outlet />
    </>
  );
};
