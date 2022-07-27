import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, concatMap, Observable, throwError } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { Login } from '../../shared/models/login';
import { Router } from '@angular/router';
import { URLS } from 'src/app/shared/urls/urls';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private TOKEN_KEY = 'angularRockToken';
  isAuthenticated$ = new BehaviorSubject<boolean>(this.isLocalAuthenticated());
  errorInput$ = new BehaviorSubject<boolean>(false);
  userInfo$: BehaviorSubject<User | object> = new BehaviorSubject({});

  constructor(private http: HttpClient, private router: Router) {}

  loginIn({ login, password }: Login): void {
    this.errorInput$.next(false);
    this.http
      .post(URLS.LOGIN, { login, password })
      .pipe(concatMap((token) => this.http.post<User>(URLS.USER_INFO, token)))
      .subscribe(
        (user: User) => {
          this.isAuthenticated$.next(true);
          this.userInfo$.next(user);
          localStorage.setItem('angularRockToken', user.fakeToken);
          this.router.navigate(['/courses']);
        },
        (error) => {
          this.errorInput$.next(true);
          return throwError(error.error);
        }
      );
  }
  loginOut(): void {
    this.isAuthenticated$.next(false);
    localStorage.removeItem(this.TOKEN_KEY);
  }

  getAuthToken(): string {
    return this.isLocalAuthenticated() && localStorage[this.TOKEN_KEY];
  }

  getUserInfo(): Observable<User> {
    return this.http.post<User>(URLS.USER_INFO, {
      token: this.getAuthToken(),
    });
  }

  isAuthenticated(): boolean {
    return this.isAuthenticated$.value;
  }
  isLocalAuthenticated(): boolean {
    if (localStorage[this.TOKEN_KEY]) {
      return true;
    } else {
      return false;
    }
  }
}
