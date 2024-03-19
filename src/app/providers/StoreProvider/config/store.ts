import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";

import { $api } from "shared/api/api";

import { userReducer } from "entities/User";

import { StateSchema, ThunkExtraArg } from "../model/types/StateSchema";

export function createReduxStore(
  initialState?: StateSchema,
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    user: userReducer,
  };

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    })
  });

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];