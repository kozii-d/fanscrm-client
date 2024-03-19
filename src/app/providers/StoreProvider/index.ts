import { createReduxStore } from "./config/store";
import type { AppDispatch } from "./config/store";
import type { StateSchema, ThunkConfig } from "./model/types/StateSchema";
import { StoreProvider } from "./ui/StoreProvider";

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ThunkConfig,
  AppDispatch,
};
