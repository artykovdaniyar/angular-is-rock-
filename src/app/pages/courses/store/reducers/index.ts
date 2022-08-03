import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
} from '@ngrx/store';

export const COURSES_KEY = 'courses';

import * as fromReducer from './courses.reducer';
import * as fromState from '../state';

// export interface CoursesStoreState {
//   [COURSES_KEY]: fromState.CoursesState;
// }

// export const reducers: ActionReducerMap<CoursesStoreState> = {
//   [COURSES_KEY]:
//     fromReducer.coursesReduser as ActionReducer<fromState.CoursesState>,
// };
