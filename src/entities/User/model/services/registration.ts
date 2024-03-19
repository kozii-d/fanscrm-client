import { createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

import { ThunkConfig } from "app/providers/StoreProvider";

import { userActions } from "../slices/userSlice";


interface RegistrationArgs {
  email: string;
  password: string;
}

interface RegistrationResponseData { access_token: string }

export interface DecodedToken { id: number, email: string }

export const registration = createAsyncThunk<
  DecodedToken,
  RegistrationArgs,
  ThunkConfig<string>
>("user/registration", async (args, thunkAPI) => {
  const { extra, rejectWithValue, dispatch } = thunkAPI;
  const { email, password } = args;

  try {
    const response = await extra.api.post<RegistrationResponseData>("/auth/registration", {
      email,
      password
    });

    if (!response.data) {
      throw new Error("Failed to register");
    }

    localStorage.setItem("access_token", response.data.access_token);

    dispatch(userActions.setAuth(true));

    return jwtDecode<DecodedToken>(response.data.access_token);
  } catch (e) {
    console.error(e);
    return rejectWithValue("error");
  }
});
