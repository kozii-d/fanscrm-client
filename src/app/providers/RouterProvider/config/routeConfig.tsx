import { RouteProps } from "react-router-dom";

import { LoginPage } from "pages/LoginPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
}

export enum AppRoutes {
  MAIN = "main",
  PROFILE = "profile",
  LOGIN = "login",

  // last
  NOT_FOUND = "not_found"
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.PROFILE]: "/profile/", // + :id,
  [AppRoutes.LOGIN]: "/login",

  // last
  [AppRoutes.NOT_FOUND]: "/*",
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
    authOnly: true,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage />,
  },

  // last
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
