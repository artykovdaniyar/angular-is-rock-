import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { loginReducer } from './login.reducers';
import { coursesReducer } from './courses.reducer';
import { CoursesState, LoginState } from '../state';

function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

export const appReducers: ActionReducerMap<AppState> = {
  login: loginReducer as ActionReducer<LoginState>,
  courses: coursesReducer as ActionReducer<CoursesState>,
};
