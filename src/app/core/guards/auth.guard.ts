import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginState } from 'src/app/pages/login/store';
import { isAuthenticatedSelector } from 'src/app/pages/login/store/selectors';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<LoginState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let isAuthenticated: boolean = false;
    this.store
      .select(isAuthenticatedSelector)
      .subscribe((state) => (isAuthenticated = state));

    return isAuthenticated ? true : this.router.navigate(['/login'], {});
  }
}
