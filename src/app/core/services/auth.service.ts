import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  concatMap,
  Observable,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { Login } from '../../shared/models/login';
import { Router } from '@angular/router';

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
      .post('http://localhost:3004/auth/login', { login, password })
      .pipe(
        concatMap((token) =>
          this.http.post<User>('http://localhost:3004/auth/userinfo', token)
        )
      )
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
    return this.http.post<User>('http://localhost:3004/auth/userinfo', {
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
