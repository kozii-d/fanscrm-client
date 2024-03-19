import { getUserEmail, getUserIsLoading, getUserIsAuth } from "./model/selectors/userSelectors";
import { fetchUserById } from "./model/services/fetchUserById";
import { login } from "./model/services/login";
import { registration } from "./model/services/registration";
import { userReducer, userActions } from "./model/slices/userSlice";
import type { UserSchema } from "./model/types/user";

export {
  userReducer,
  userActions,
  login,
  registration,
  getUserEmail,
  getUserIsLoading,
  fetchUserById,
  getUserIsAuth
};

export type { UserSchema };