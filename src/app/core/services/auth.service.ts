import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { Login } from '../../shared/models/login';
import { URLS } from 'src/app/shared/urls/urls';
import { Token } from '../../shared/models/token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  initialUserInfo: User = {
    id: 0,
    token: '',
    name: { first: '', last: '' },
    login: '',
    password: '',
    fakeToken: '',
  };

  constructor(private http: HttpClient) {}

  loginIn({ login, password }: Login): Observable<Token | any> {
    return this.http.post(URLS.LOGIN, { login, password });
  }

  getUserInfo(token: string): Observable<User> {
    return this.http.post<User>(URLS.USER_INFO, {
      token: token,
    });
  }
}
