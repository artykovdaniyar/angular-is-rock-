import { Injectable } from '@angular/core';
import { Login } from './models/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  TOKEN = 'angularRockToken';
  constructor() {}

  loginIn(userLogin: Login): void {
    localStorage.setItem('angularRockToken', JSON.stringify(userLogin));
  }
  loginOut(): void {
    localStorage.removeItem(this.TOKEN);
  }
  getUserInfo(): Login {
    return JSON.parse(localStorage[this.TOKEN]);
  }
  isAuthenticated(): boolean {
    if (this.getUserInfo()) {
      return true;
    } else {
      return false;
    }
  }
}
