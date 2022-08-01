import { Action } from '@ngrx/store';
import { Course } from 'src/app/shared/models/course';

export enum CoursesActions {
  GET_COURSES = '[Courses] Get Courses',
  GET_COURSES_FAIL = '[Courses] Get Courses Fail',
  GET_COURSES_SUCCESS = '[Courses] Get Courses Success',
  LOAD_MORE_COURSES = '[Courses] Load More Courses',
  LOAD_MORE_COURSES_FAIL = '[Courses] Load More Courses Fail',
  LOAD_MORE_COURSES_SUCCESS = '[Courses] Load More Courses Success',
  ALL_COURSES_LOADED = '[Courses] All Courses Loaded',
  TOTAL_COURSES_NUM = '[Courses] Total Courses Num',
  TOTAL_COURSES_NUM_SUCCESS = '[Courses] Total Courses Num Success',
  TOTAL_COURSES_NUM_FAIL = '[Courses] Total Courses Num Fail',
  DATA_IS_EMPTY = '[Courses] Data Is Empty',
  COURSES_NO_FOUND = '[Courses] Courses No Found',
  RESET_COURSES_REQUEST = '[Courses] Reset Courses Ruquest',
  IS_ALL_COURSES_LOADED = '[Courses] Is All Courses Loaded',
}

export class GetCourses implements Action {
  public readonly type = CoursesActions.GET_COURSES;
  constructor(public payload: string) {}
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
  constructor(public payload: string) {}
}

export class LoadMoreCoursesSuccess implements Action {
  public readonly type = CoursesActions.LOAD_MORE_COURSES_SUCCESS;
  constructor(public payload: Course[]) {}
}

export class LoadMoreCoursesFail implements Action {
  public readonly type = CoursesActions.LOAD_MORE_COURSES_FAIL;
  constructor(public payload: any) {}
}

export class AllCoursesLoaded implements Action {
  public readonly type = CoursesActions.ALL_COURSES_LOADED;
  constructor(public payload: boolean) {}
}

export class TotalCourseNum implements Action {
  public readonly type = CoursesActions.TOTAL_COURSES_NUM;
}
export class TotalCourseNumSuccess implements Action {
  public readonly type = CoursesActions.TOTAL_COURSES_NUM_SUCCESS;
  constructor(public payload: number) {}
}

export class TotalCourseNumFail implements Action {
  public readonly type = CoursesActions.TOTAL_COURSES_NUM_FAIL;
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

export class ResetCoursesRuquest implements Action {
  public readonly type = CoursesActions.RESET_COURSES_REQUEST;
}

export class IsAllCoursesLoaded implements Action {
  public readonly type = CoursesActions.IS_ALL_COURSES_LOADED;
}

export type CoursesActionTypes =
  | GetCourses
  | GetCoursesSuccess
  | GetCoursesFail
  | LoadMoreCourses
  | LoadMoreCoursesSuccess
  | LoadMoreCoursesFail
  | AllCoursesLoaded
  | TotalCourseNum
  | TotalCourseNumSuccess
  | TotalCourseNumFail
  | DataIsEmpty
  | CousesNoFound
  | ResetCoursesRuquest
  | IsAllCoursesLoaded;
