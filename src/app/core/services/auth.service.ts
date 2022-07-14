import { Injectable } from '@angular/core';
import { Login } from '../../shared/models/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoginModelOpened = false;

  TOKEN = 'angularRockToken';
  constructor() {}

  loginIn(userLogin: Login): void {
    localStorage.setItem('angularRockToken', JSON.stringify(userLogin));
  }
  loginOut(): void {
    localStorage.removeItem(this.TOKEN);
  }
  getUserInfo() {
    return localStorage[this.TOKEN];
  }
  isAuthenticated(): boolean {
    if (this.getUserInfo()) {
      return true;
    } else {
      return false;
    }
  }
}
