import { createReducer, on } from '@ngrx/store';
import * as fromState from '../state';
import * as fromAction from '../actions/courses.actions';
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
        courses: courses,
      };
    }
    case fromAction.CoursesActions.GET_COURSES_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case fromAction.CoursesActions.LOAD_MORE_COURSES: {
      return {
        ...state,
        loading: true,
        startWith: state.startWith + state.coursesPerPage,
      };
    }

    case fromAction.CoursesActions.LOAD_MORE_COURSES_SUCCESS: {
      const courses = action.payload;
      return {
        ...state,
        loading: false,
        courses: [...state.courses, ...courses],
      };
    }

    case fromAction.CoursesActions.LOAD_MORE_COURSES_FAIL: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case fromAction.CoursesActions.ALL_COURSES_LOADED: {
      return {
        ...state,
        allCoursesLoaded: action.payload,
      };
    }

    case fromAction.CoursesActions.TOTAL_COURSES_NUM: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromAction.CoursesActions.TOTAL_COURSES_NUM_SUCCESS: {
      return {
        ...state,
        loading: false,
        totalCourseNum: action.payload,
      };
    }
    case fromAction.CoursesActions.TOTAL_COURSES_NUM_FAIL: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case fromAction.CoursesActions.DATA_IS_EMPTY: {
      return {
        ...state,
        dataIsEmpty: action.payload,
      };
    }

    case fromAction.CoursesActions.COURSES_NO_FOUND: {
      return {
        ...state,
        coursesNoFound: action.payload,
      };
    }
    case fromAction.CoursesActions.RESET_COURSES_REQUEST: {
      return {
        ...state,
        courses: [],
        startWith: 0,
        error: false,
        allCoursesLoaded: false,
        dataIsEmpty: false,
        coursesNoFound: false,
      };
    }
    case fromAction.CoursesActions.IS_ALL_COURSES_LOADED: {
      return {
        ...state,
        allCoursesLoaded:
          state.startWith + state.coursesPerPage >= state.totalCourseNum &&
          state.courses.length !== 0,
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
export const getAllCoursesLoaded = (state: fromState.CoursesState) =>
  state.allCoursesLoaded;
export const getCoursesError = (state: fromState.CoursesState) => state.error;
export const getTotalCourseNum = (state: fromState.CoursesState) =>
  state.totalCourseNum;
export const getDataIsEmpty = (state: fromState.CoursesState) =>
  state.dataIsEmpty;
export const getCoursesNoFound = (state: fromState.CoursesState) =>
  state.coursesNoFound;
export const getStartLoadWith = (state: fromState.CoursesState) =>
  state.startWith;
export const getCoursesPerPage = (state: fromState.CoursesState) =>
  state.coursesPerPage;
