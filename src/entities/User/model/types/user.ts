export interface User {
  id: string;
  email: string;
}

export interface UserSchema {
  data?: User;
  isAuth: boolean;
  isLoading: boolean;
  error?: string;
}