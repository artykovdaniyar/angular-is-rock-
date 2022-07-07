import { Injectable } from '@angular/core';
import { Login } from './models/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  TOKEN = 'angularRockToken';
  constructor() {}

  loginIn(userLogin: Login) {
    localStorage.setItem('angularRockToken', JSON.stringify(userLogin));
  }
  loginOut() {
    localStorage.removeItem(this.TOKEN);
  }
  isAuthenticated(): boolean {
    if (localStorage.getItem(this.TOKEN)) {
      return true;
    } else {
      return false;
    }
  }
}
