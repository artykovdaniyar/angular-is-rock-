import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from '../state';

export const coursesFeatureSelector =
  createFeatureSelector<CoursesState>('coursesStore');

export const coursesSelector = createSelector(
  coursesFeatureSelector,
  (coursesState) => coursesState.courses
);

export const courseDetailsSelector = createSelector(
  coursesFeatureSelector,
  (coursesState) => coursesState.courseForUpdate
);

export const coursesLoadingSelector = createSelector(
  coursesFeatureSelector,
  (coursesState) => coursesState.loading
);

export const allCoursesLoadedSelector = createSelector(
  coursesFeatureSelector,
  (coursesState) => coursesState.allCoursesLoaded
);
export const coursesErrorSelector = createSelector(
  coursesFeatureSelector,
  (coursesState) => coursesState.error
);

export const totalCourseNumSelector = createSelector(
  coursesFeatureSelector,
  (coursesState) => coursesState.totalCourseNum
);

export const dataIsEmptySelector = createSelector(
  coursesFeatureSelector,
  (coursesState) => coursesState.dataIsEmpty
);

export const coursesNoFoundSelector = createSelector(
  coursesFeatureSelector,
  (coursesState) => coursesState.coursesNoFound
);

export const startLoadWithSelector = createSelector(
  coursesFeatureSelector,
  (coursesState) => coursesState.startWith
);

export const coursesPerPageSelector = createSelector(
  coursesFeatureSelector,
  (coursesState) => coursesState.coursesPerPage
);
