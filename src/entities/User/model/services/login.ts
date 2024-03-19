import { createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

import { ThunkConfig } from "app/providers/StoreProvider";

import { userActions } from "../slices/userSlice";

interface LoginArgs {
  email: string;
  password: string;
}

export interface LoginResponseData { access_token: string }

export interface DecodedToken { id: number, email: string }

export const login = createAsyncThunk<
  DecodedToken,
  LoginArgs,
  ThunkConfig<string>
>("user/login", async (args, thunkAPI) => {
  const { extra, rejectWithValue, dispatch } = thunkAPI;
  const { email, password } = args;

  try {
    const response = await extra.api.post<LoginResponseData>("/auth/login", {
      email,
      password
    });

    if (!response.data) {
      throw new Error("Failed to login");
    }

    localStorage.setItem("access_token", response.data.access_token);

    dispatch(userActions.setAuth(true));

    return jwtDecode<DecodedToken>(response.data.access_token);
  } catch (e) {
    console.error(e);
    return rejectWithValue("error");
  }
});
