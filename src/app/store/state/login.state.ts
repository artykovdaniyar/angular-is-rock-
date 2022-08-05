import { User } from 'src/app/shared/models/user';

export interface LoginState {
  userInfo: User | null;
  token: string;
  isAuthenticated: boolean;
  loading: boolean;
  error: boolean;
  serverError: boolean;
}

export const initialLoginState: LoginState = {
  userInfo: null,
  token: '',
  isAuthenticated: false,
  loading: false,
  error: false,
  serverError: false,
};
