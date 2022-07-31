import { createReducer, on } from '@ngrx/store';
import * as fromState from '../state';
import * as fromAction from '../actions';
import { Course } from '../../../../shared/models/course';

export const coursesReduser = (
  state: fromState.CoursesState = fromState.initialCoursesState,
  action: fromAction.CoursesActionTypes
): fromState.CoursesState => {
  switch (action.type) {
    case fromAction.CoursesActions.GET_COURSES: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromAction.CoursesActions.GET_COURSES_SUCCESS: {
      const courses = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        courses: courses,
      };
    }
    case fromAction.CoursesActions.GET_COURSES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
    default: {
      return { ...state };
    }
  }
};
export const getCourses = (state: fromState.CoursesState) => state.courses;
export const getCoursesLoading = (state: fromState.CoursesState) =>
  state.loading;
export const getCoursesLoaded = (state: fromState.CoursesState) => state.loaded;
