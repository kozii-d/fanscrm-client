import { Suspense, useEffect } from "react";

import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

import { userActions } from "entities/User";

import { AppRouter } from "app/providers/RouterProvider";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuth());
  }, [dispatch]);

  return (
    <Suspense fallback="">
      <AppRouter />
    </Suspense>
  );
};

export default App;