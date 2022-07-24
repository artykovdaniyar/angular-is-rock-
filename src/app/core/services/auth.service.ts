import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, switchMapTo, tap } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { Login } from '../../shared/models/login';
import { Router } from '@angular/router';
import { Token } from '../../shared/models/token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private TOKEN_KEY = 'angularRockToken';
  isAuthenticated$ = new BehaviorSubject<boolean>(this.isLocalAuthenticated());

  constructor(private http: HttpClient, private router: Router) {}

  loginIn({ login, password }: Login): void {
    this.http
      .post('http://localhost:3004/auth/login', { login, password })
      .subscribe((res: any) => {
        this.isAuthenticated$.next(true);
        localStorage.setItem('angularRockToken', res.token);
        this.router.navigate(['/courses']);
      });
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
