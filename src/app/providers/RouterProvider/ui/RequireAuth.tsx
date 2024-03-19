import { ReactNode } from "react";

import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import { getUserIsAuth } from "entities/User";

import { RoutePath } from "../config/routeConfig";

interface RequireAuthProps {
  children: ReactNode;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const isAuth = useSelector(getUserIsAuth);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={RoutePath.login} state={{ from: location }} replace />;
  }

  return children;
};
