import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromReduser from '../reducers/courses.reducer';
import { COURSES_KEY } from '../reducers/index';

export const getCoursesState = createSelector(
  fromFeature.getCourseListState,
  (state: fromFeature.CoursesStoreState) => state[COURSES_KEY]
);

export const coursesSelector = createSelector(
  getCoursesState,
  fromReduser.getCourses
);

export const coursesLoadingSelector = createSelector(
  getCoursesState,
  fromReduser.getCoursesLoading
);

export const allCoursesLoadedSelector = createSelector(
  getCoursesState,
  fromReduser.getAllCoursesLoaded
);
export const coursesErrorSelector = createSelector(
  getCoursesState,
  fromReduser.getCoursesError
);

export const totalCourseNumSelector = createSelector(
  getCoursesState,
  fromReduser.getTotalCourseNum
);

export const dataIsEmptySelector = createSelector(
  getCoursesState,
  fromReduser.getDataIsEmpty
);

export const coursesNoFoundSelector = createSelector(
  getCoursesState,
  fromReduser.getCoursesNoFound
);

export const startLoadWithSelector = createSelector(
  getCoursesState,
  fromReduser.getStartLoadWith
);

export const coursesPerPageSelector = createSelector(
  getCoursesState,
  fromReduser.getCoursesPerPage
);
