import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store<fromStore.LoginState>
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let isAuthenticated: boolean = false;
    this.store
      .select(fromStore.isAuthenticatedSelector)
      .subscribe((state) => (isAuthenticated = state));

    return isAuthenticated ? true : this.router.navigate(['/login'], {});
  }
}
