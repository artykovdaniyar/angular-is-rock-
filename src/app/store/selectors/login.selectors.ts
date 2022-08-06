import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from '../state';

export const TOKEN_KEY = 'angularRockToken';

export const loginFeatureSelector = createFeatureSelector<LoginState>('login');

export const userInfoSelector = createSelector(
  loginFeatureSelector,
  (state) => state.userInfo
);
export const tokenSelector = createSelector(
  loginFeatureSelector,
  (state) => state.token
);

export const isAuthenticatedSelector = createSelector(
  loginFeatureSelector,
  (state) => state.isAuthenticated
);
export const errorSelector = createSelector(
  loginFeatureSelector,
  (state) => state.error
);
export const serverErrorSelector = createSelector(
  loginFeatureSelector,
  (state) => state.serverError
);

export const loadingSelector = createSelector(
  loginFeatureSelector,
  (state) => state.loading
);
