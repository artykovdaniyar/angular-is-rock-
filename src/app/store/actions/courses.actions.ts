import { Action } from '@ngrx/store';
import { Course } from 'src/app/shared/models/course';
import { searchParams } from 'src/app/shared/models/requestParams';
import { Author } from '../../shared/models/author';

export enum CoursesActions {
  GET_COURSES = '[Courses] Get Courses',
  GET_COURSES_FAIL = '[Courses] Get Courses Fail',
  GET_COURSES_SUCCESS = '[Courses] Get Courses Success',

  LOAD_MORE_COURSES = '[Courses] Load More Courses',
  LOAD_MORE_COURSES_FAIL = '[Courses] Load More Courses Fail',
  LOAD_MORE_COURSES_SUCCESS = '[Courses] Load More Courses Success',

  TOTAL_COURSES_NUM = '[Courses] Total Courses Num',
  TOTAL_COURSES_NUM_SUCCESS = '[Courses] Total Courses Num Success',
  TOTAL_COURSES_NUM_FAIL = '[Courses] Total Courses Num Fail',

  GET_COURSE_BY_ID = '[Courses] Get Course By Id',
  GET_COURSE_BY_ID_SUCCESS = '[Courses] Get Course By Id Success',
  GET_COURSE_BY_ID_FAIL = '[Courses] Get Course By Id Fail',

  EDIT_COURSE = '[Courses] Edit Course',
  EDIT_COURSE_SUCCESS = '[Courses] Edit Course Success',
  EDIT_COURSE_FAIL = '[Courses] Edit Course Fail',

  CREATE_COURSE = '[Courses] Create Course',
  CREATE_COURSE_SUCCESS = '[Courses] Create Course Success',
  CREATE_COURSE_FAIL = '[Courses] Create Course Fail',

  DELETE_COURSE = '[Courses] Delete Course',
  DELETE_COURSE_SUCCESS = '[Courses] Delete Course Success',
  DELETE_COURSE_FAIL = '[Courses] Delete Course Fail',

  GET_AUTHORS = '[Courses] Get Authors',
  GET_AUTHORS_SUCCESS = '[Courses] Get Authors Success',
  GET_AUTHORS_FAIL = '[Courses] Get Authors Fail',

  DATA_IS_EMPTY = '[Courses] Data Is Empty',
  COURSES_NO_FOUND = '[Courses] Courses No Found',
  RESET_COURSES_STATE = '[Courses] Reset Courses State',
  IS_ALL_COURSES_LOADED = '[Courses] Is All Courses Loaded',
  ALL_COURSES_LOADED = '[Courses] All Courses Loaded',
  NEXT_PAGE = '[Courses] Next Page',
}

export class GetCourses implements Action {
  public readonly type = CoursesActions.GET_COURSES;
  constructor(public payload: searchParams) {}
}
export class GetCoursesSuccess implements Action {
  public readonly type = CoursesActions.GET_COURSES_SUCCESS;
  constructor(public payload: Course[]) {}
}
export class GetCoursesFail implements Action {
  public readonly type = CoursesActions.GET_COURSES_FAIL;
  constructor(public payload: any) {}
}

export class LoadMoreCourses implements Action {
  public readonly type = CoursesActions.LOAD_MORE_COURSES;
  constructor(public payload: searchParams) {}
}
export class LoadMoreCoursesSuccess implements Action {
  public readonly type = CoursesActions.LOAD_MORE_COURSES_SUCCESS;
  constructor(public payload: Course[]) {}
}
export class LoadMoreCoursesFail implements Action {
  public readonly type = CoursesActions.LOAD_MORE_COURSES_FAIL;
  constructor(public payload: any) {}
}

export class TotalCourseNum implements Action {
  public readonly type = CoursesActions.TOTAL_COURSES_NUM;
  constructor(public payload: string) {}
}
export class TotalCourseNumSuccess implements Action {
  public readonly type = CoursesActions.TOTAL_COURSES_NUM_SUCCESS;
  constructor(public payload: number) {}
}
export class TotalCourseNumFail implements Action {
  public readonly type = CoursesActions.TOTAL_COURSES_NUM_FAIL;
  constructor(public payload: any) {}
}

export class EditCourse implements Action {
  public readonly type = CoursesActions.EDIT_COURSE;
  constructor(public payload: Course) {}
}
export class EditCourseSuccess implements Action {
  public readonly type = CoursesActions.EDIT_COURSE_SUCCESS;
}
export class EditCourseFail implements Action {
  public readonly type = CoursesActions.EDIT_COURSE_FAIL;
  constructor(public payload: any) {}
}

export class CreateCourse implements Action {
  public readonly type = CoursesActions.CREATE_COURSE;
  constructor(public payload: Course) {}
}
export class CreateCourseSuccess implements Action {
  public readonly type = CoursesActions.CREATE_COURSE_SUCCESS;
}
export class CreateCourseFail implements Action {
  public readonly type = CoursesActions.CREATE_COURSE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteCourse implements Action {
  public readonly type = CoursesActions.DELETE_COURSE;
  constructor(public payload: number) {}
}
export class DeleteCourseSuccess implements Action {
  public readonly type = CoursesActions.DELETE_COURSE_SUCCESS;
}
export class DeleteCourseFail implements Action {
  public readonly type = CoursesActions.DELETE_COURSE_FAIL;
  constructor(public payload: any) {}
}

export class GetAuthors implements Action {
  public readonly type = CoursesActions.GET_AUTHORS;
}

export class GetAuthorsSuccess implements Action {
  public readonly type = CoursesActions.GET_AUTHORS_SUCCESS;
  constructor(public payload: Author[] | any[]) {}
}
export class GetAuthorsFail implements Action {
  public readonly type = CoursesActions.GET_AUTHORS_FAIL;
  constructor(public payload: any) {}
}

export class GetCourseById implements Action {
  public readonly type = CoursesActions.GET_COURSE_BY_ID;
  constructor(public payload: number) {}
}
export class GetCourseByIdSuccess implements Action {
  public readonly type = CoursesActions.GET_COURSE_BY_ID_SUCCESS;
  constructor(public payload: Course) {}
}
export class GetCourseByIdFail implements Action {
  public readonly type = CoursesActions.GET_COURSE_BY_ID_FAIL;
  constructor(public payload: any) {}
}

export class DataIsEmpty implements Action {
  constructor(public payload: boolean) {}
  public readonly type = CoursesActions.DATA_IS_EMPTY;
}

export class CousesNoFound implements Action {
  public readonly type = CoursesActions.COURSES_NO_FOUND;
  constructor(public payload: boolean) {}
}

export class ResetCoursesState implements Action {
  public readonly type = CoursesActions.RESET_COURSES_STATE;
}

export class IsAllCoursesLoaded implements Action {
  public readonly type = CoursesActions.IS_ALL_COURSES_LOADED;
}

export class AllCoursesLoaded implements Action {
  public readonly type = CoursesActions.ALL_COURSES_LOADED;
  constructor(public payload: boolean) {}
}

export class NextPage implements Action {
  public readonly type = CoursesActions.NEXT_PAGE;
}

export type CoursesActionTypes =
  | GetCourses
  | GetCoursesSuccess
  | GetCoursesFail
  | LoadMoreCourses
  | LoadMoreCoursesSuccess
  | LoadMoreCoursesFail
  | TotalCourseNum
  | TotalCourseNumSuccess
  | TotalCourseNumFail
  | GetCourseById
  | GetCourseByIdSuccess
  | GetCourseByIdFail
  | EditCourse
  | EditCourseSuccess
  | EditCourseFail
  | CreateCourse
  | CreateCourseSuccess
  | CreateCourseFail
  | DeleteCourse
  | DeleteCourseSuccess
  | DeleteCourseFail
  | GetAuthors
  | GetAuthorsSuccess
  | GetAuthorsFail
  | DataIsEmpty
  | CousesNoFound
  | ResetCoursesState
  | IsAllCoursesLoaded
  | AllCoursesLoaded
  | NextPage;
