import { Name } from './Name';

export interface User {
  id: number;
  token: string;
  name: Name;
  login: string;
  password: string;
  fakeToken: string;
}
