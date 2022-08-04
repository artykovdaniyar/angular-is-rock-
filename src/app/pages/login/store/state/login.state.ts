import { User } from '../../../../shared/models/user';
import { Token } from '../../../../shared/models/token';
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
