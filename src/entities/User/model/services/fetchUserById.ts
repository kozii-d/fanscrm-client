import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "app/providers/StoreProvider";

import { User } from "../types/user";

export const fetchUserById = createAsyncThunk<
  User,
  number,
  ThunkConfig<string>
>("user/fetchUserById", async (id, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.get<User>(`/users/${id}`);

    if (!response.data) {
      throw new Error("User not found");
    }

    return response.data;
  } catch (e) {
    console.error(e);
    return rejectWithValue("error");
  }
});
