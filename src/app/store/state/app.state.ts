import { LoginState, initialLoginState } from './login.state';
import { CoursesState, initialCoursesState } from './courses.state';

export interface AppState {
  login: LoginState;
  courses: CoursesState;
}

export const intialAppState: AppState = {
  login: initialLoginState,
  courses: initialCoursesState,
};
