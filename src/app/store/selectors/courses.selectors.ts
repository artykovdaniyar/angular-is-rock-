import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from '../state';

export const coursesFeatureSelector =
  createFeatureSelector<CoursesState>('courses');

export const coursesSelector = createSelector(
  coursesFeatureSelector,
  (state) => state.courses
);

export const courseDetailsSelector = createSelector(
  coursesFeatureSelector,
  (state) => state.courseForUpdate
);

export const coursesLoadingSelector = createSelector(
  coursesFeatureSelector,
  (state) => state.loading
);

export const allCoursesLoadedSelector = createSelector(
  coursesFeatureSelector,
  (state) => state.allCoursesLoaded
);
export const coursesErrorSelector = createSelector(
  coursesFeatureSelector,
  (state) => state.error
);

export const totalCourseNumSelector = createSelector(
  coursesFeatureSelector,
  (state) => state.totalCourseNum
);

export const dataIsEmptySelector = createSelector(
  coursesFeatureSelector,
  (state) => state.dataIsEmpty
);

export const coursesNoFoundSelector = createSelector(
  coursesFeatureSelector,
  (state) => state.coursesNoFound
);

export const startLoadWithSelector = createSelector(
  coursesFeatureSelector,
  (state) => state.startWith
);

export const coursesPerPageSelector = createSelector(
  coursesFeatureSelector,
  (state) => state.coursesPerPage
);

export const allAuthorsSelector = createSelector(
  coursesFeatureSelector,
  (state) => state.allAuthors
);
