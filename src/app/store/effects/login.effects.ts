import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, exhaustMap, map, mergeMap, of, tap } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import * as fromActions from '../actions';
import { Router } from '@angular/router';
import { Token } from '../../shared/models/token';

export const TOKEN_KEY = 'angularRockToken';
interface loginInsState {
  token: string;
  type: string;
}
@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  loginIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loginIn),
      exhaustMap((action) =>
        this.authService.loginIn(action.login).pipe(
          delay(500),
          map(({ token }: Token) => {
            localStorage.setItem('angularRockToken', token);
            return fromActions.loginInSuccess({ token });
          }),
          catchError((error) => {
            if (error.status === 401) {
              console.error(error);
              return of(fromActions.loginInFail({ error }));
            } else {
              console.error(error);
              return of(fromActions.loginInFailServer({ error }));
            }
          })
        )
      )
    )
  );
  loginInSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loginInSuccess),
      map((data: loginInsState) =>
        fromActions.getUserInfo({ token: data.token })
      )
    )
  );

  loginOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loginOut),
      tap(() => localStorage.removeItem(TOKEN_KEY)),
      map(() => {
        return fromActions.loginOutSuccess();
      })
    )
  );

  getUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getUserInfo),
      mergeMap((action) =>
        this.authService.getUserInfo(action.token).pipe(
          map((user) => fromActions.getUserInfoSuccess({ userInfo: user })),
          tap(() => this.router.navigate(['/courses'])),
          catchError((error) => {
            return of(fromActions.getUserInfoFail({ error: error }));
          })
        )
      )
    )
  );
}
