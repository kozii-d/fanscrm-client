import { createSelector } from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/StoreProvider";

import { initialState } from "../slices/userSlice";

export const getUserState = (state: StateSchema) => state?.user || initialState;

export const getUserData = createSelector(getUserState, (user) => user.data);

export const getUserEmail = createSelector(getUserData, (userData) => userData?.email || "");
export const getUserIsLoading = createSelector(getUserState, (user) => user.isLoading);
export const getUserIsAuth = createSelector(getUserState, (user) => user.isAuth);
