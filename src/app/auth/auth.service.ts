import { Injectable } from '@angular/core';
import { Login } from './models/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  loginIn(userLogin: Login) {
    localStorage.setItem('angularRockToken', JSON.stringify(userLogin));
  }
}
