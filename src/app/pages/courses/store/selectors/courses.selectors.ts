import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromReduser from '../reducers/courses.reducer';
import * as fromState from '../state';
import { COURSES_KEY } from '../reducers/index';

export const getCoursesState = createSelector(
  fromFeature.getCourseListState,
  (state: fromFeature.CoursesStoreState) => state[COURSES_KEY]
);

export const getCourses = createSelector(
  getCoursesState,
  fromReduser.getCourses
);

export const getCoursesLoading = createSelector(
  getCoursesState,
  fromReduser.getCoursesLoading
);

export const getCoursesLoaded = createSelector(
  getCoursesState,
  fromReduser.getCoursesLoaded
);
