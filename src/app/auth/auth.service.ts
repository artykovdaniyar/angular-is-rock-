import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoginModelOpened = false;

  TOKEN = 'angularRockToken';
  constructor() {}

  toggleLoginModel() {
    this.isLoginModelOpened = !this.isLoginModelOpened;
  }

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
