import React, { memo, Suspense, useCallback } from "react";

import { Route, Routes } from "react-router-dom";

import { AppRoutesProps, routeConfig } from "../config/routeConfig";

import { RequireAuth } from "./RequireAuth";

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<div>Loading...</div>}>{route.element}</Suspense>
    );
    return (
      <Route
        key={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
        path={route.path}
      />
    );
  }, []);
  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
