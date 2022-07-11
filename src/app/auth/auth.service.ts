import { Injectable } from '@angular/core';
import { Login } from './models/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoginModelOpened = false;

  private TOKEN = 'angularRockToken';
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
