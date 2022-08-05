import { createReducer, on } from '@ngrx/store';
import * as fromState from '../state';
import * as fromActions from '../actions';

export const loginReducer = createReducer(
  fromState.initialLoginState,
  on(
    fromActions.loginIn,
    fromActions.loginOut,
    fromActions.getUserInfo,
    (state) => ({
      ...state,
      loading: true,
      error: false,
      serverError: false,
    })
  ),
  on(fromActions.loginInFailServer, (state) => ({
    ...state,
    loading: false,
    serverError: true,
  })),
  on(fromActions.loginInFail, fromActions.getUserInfoFail, (state) => ({
    ...state,
    loading: false,
    error: true,
  })),

  on(fromActions.loginInSuccess, (state, action) => ({
    ...state,
    isAuthenticated: true,
    loading: false,
    token: action.token,
  })),
  on(fromActions.loginOutSuccess, (state) => ({
    ...state,
    isAuthenticated: false,
    loading: false,
    token: '',
    userInfo: null,
  })),
  on(fromActions.getUserInfoSuccess, (state, action) => ({
    ...state,
    isAuthenticated: true,
    loading: false,
    userInfo: action.userInfo,
  }))
);
