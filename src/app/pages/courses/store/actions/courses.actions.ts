import { Action } from '@ngrx/store';
import { Course } from 'src/app/shared/models/course';

export enum CoursesActions {
  GET_COURSES = '[Courses] Get Courses',
  GET_COURSES_FAIL = '[Courses] Get Courses Fail',
  GET_COURSES_SUCCESS = '[Courses] Get Courses Success',
}

export class GetCourses implements Action {
  public readonly type = CoursesActions.GET_COURSES;
}

export class GetCoursesSuccess implements Action {
  public readonly type = CoursesActions.GET_COURSES_SUCCESS;
  constructor(public payload: Course[]) {}
}
export class GetCoursesFail implements Action {
  public readonly type = CoursesActions.GET_COURSES_FAIL;
  constructor(public payload: any) {}
}

export type CoursesActionTypes =
  | GetCourses
  | GetCoursesSuccess
  | GetCoursesFail;
