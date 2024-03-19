import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchUserById } from "../services/fetchUserById";
import { login } from "../services/login";
import { registration } from "../services/registration";
import { User, UserSchema } from "../types/user";

export const initialState: UserSchema = {
  data: undefined,
  isAuth: false,
  isLoading: false,
  error: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
    },
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    initAuth: (state) => {
      const token = localStorage.getItem("access_token");

      if (token) {
        state.isAuth = true;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isAuth = false;
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.isAuth = true;
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isAuth = false;
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(registration.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registration.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(registration.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchUserById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

export const { actions: userActions, reducer: userReducer } = userSlice;