import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromStore.LoginState>) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let isAuthenticated = false;
    let token = '';
    this.store
      .select(fromStore.isAuthenticatedSelector)
      .subscribe((state) => (isAuthenticated = state));

    this.store
      .select(fromStore.tokenSelector)
      .subscribe((state) => (token = state));

    if (isAuthenticated) {
      req = req.clone({
        setHeaders: {
          Authorization: token,
        },
      });
    }
    return next.handle(req);
  }
}
