import { createAction, props } from '@ngrx/store';
import { Login } from 'src/app/shared/models/login';
import { User } from 'src/app/shared/models/user';

// LOGIN IN
export const loginIn = createAction(
  '[Login] Login In',
  props<{ login: Login }>()
);
export const loginInSuccess = createAction(
  '[Login] Login In Success',
  props<{ token: string }>()
);
export const loginInFail = createAction(
  '[Login] Login In Fail',
  props<{ error: any }>()
);
export const loginInFailServer = createAction(
  '[Login] Login In Fail Server',
  props<{ error: any }>()
);

// LOGIN OUT
export const loginOut = createAction('[Login] Login Out');
export const loginOutSuccess = createAction('[Login] Login Out Success');

// USER INFO
export const getUserInfo = createAction(
  '[Login] Get User Info',
  props<{ token: string }>()
);
export const getUserInfoSuccess = createAction(
  '[Login] Get User Info Success',
  props<{ userInfo: User }>()
);
export const getUserInfoFail = createAction(
  '[Login] Get User Info Fail',
  props<{ error: any }>()
);
