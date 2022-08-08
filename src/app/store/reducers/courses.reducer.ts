import * as fromState from '../state';
import * as fromAction from '../actions/courses.actions';

export const coursesReducer = (
  state: fromState.CoursesState = fromState.initialCoursesState,
  action: fromAction.CoursesActionTypes
): fromState.CoursesState => {
  switch (action.type) {
    // LOADING
    case fromAction.CoursesActions.GET_COURSES:
    case fromAction.CoursesActions.LOAD_MORE_COURSES:
    case fromAction.CoursesActions.GET_COURSE_BY_ID:
    case fromAction.CoursesActions.TOTAL_COURSES_NUM:
    case fromAction.CoursesActions.EDIT_COURSE:
    case fromAction.CoursesActions.CREATE_COURSE:
    case fromAction.CoursesActions.DELETE_COURSE:
    case fromAction.CoursesActions.GET_AUTHORS: {
      return {
        ...state,
        loading: true,
      };
    }

    // ERROR
    case fromAction.CoursesActions.GET_COURSES_FAIL:
    case fromAction.CoursesActions.LOAD_MORE_COURSES_FAIL:
    case fromAction.CoursesActions.GET_COURSE_BY_ID_FAIL:
    case fromAction.CoursesActions.TOTAL_COURSES_NUM_FAIL:
    case fromAction.CoursesActions.EDIT_COURSE_FAIL:
    case fromAction.CoursesActions.CREATE_COURSE_FAIL:
    case fromAction.CoursesActions.DELETE_COURSE_FAIL:
    case fromAction.CoursesActions.GET_AUTHORS_FAIL: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    // SUCCESS

    case fromAction.CoursesActions.GET_COURSES_SUCCESS: {
      const courses = action.payload;
      return {
        ...state,
        loading: false,
        courses: courses,
      };
    }
    case fromAction.CoursesActions.EDIT_COURSE_SUCCESS:
    case fromAction.CoursesActions.CREATE_COURSE_SUCCESS:
    case fromAction.CoursesActions.DELETE_COURSE_SUCCESS: {
      return {
        ...state,
        loading: false,
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

    case fromAction.CoursesActions.GET_COURSE_BY_ID_SUCCESS: {
      const course = action.payload;
      return {
        ...state,
        loading: false,
        courseForUpdate: course,
      };
    }
    case fromAction.CoursesActions.TOTAL_COURSES_NUM_SUCCESS: {
      return {
        ...state,
        loading: false,
        totalCourseNum: action.payload,
      };
    }
    // HELPERS
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

    case fromAction.CoursesActions.RESET_COURSES_STATE: {
      return {
        ...state,
        courses: [],
        startWith: 0,
        error: false,
        allCoursesLoaded: false,
        dataIsEmpty: false,
        coursesNoFound: false,
        totalCourseNum: 0,
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

    case fromAction.CoursesActions.ALL_COURSES_LOADED: {
      return {
        ...state,
        allCoursesLoaded: action.payload,
      };
    }

    case fromAction.CoursesActions.NEXT_PAGE: {
      return {
        ...state,
        startWith: state.startWith + state.coursesPerPage,
      };
    }
    case fromAction.CoursesActions.GET_AUTHORS_SUCCESS: {
      action.payload;
      return {
        ...state,
        allAuthors: action.payload,
        loading: false,
      };
    }
    default: {
      return { ...state };
    }
  }
};
