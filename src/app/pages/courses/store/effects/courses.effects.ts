import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {
  map,
  switchMap,
  catchError,
  first,
  concatMap,
  tap,
} from 'rxjs/operators';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { CoursesService } from 'src/app/core/services/courses.service';
import { CoursesActions } from '../actions/courses.actions';
import * as fromAction from '../actions/courses.actions';
import { Course } from '../../../../shared/models/course';
import { searchParams } from '../../../../shared/models/requestParams';
import { Router } from '@angular/router';

@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private router: Router
  ) {}

  getCourses$ = createEffect(() =>
    this.actions$.pipe(ofType(CoursesActions.GET_COURSES)).pipe(
      map((action) => action['payload']),
      switchMap((params: searchParams) => {
        return this.coursesService.getCourses(...params).pipe(
          map((courses) => new fromAction.GetCoursesSuccess(courses)),
          first(),
          catchError((error) => of(new fromAction.GetCoursesFail(error)))
        );
      })
    )
  );
  loadMoreCourses$ = createEffect(() =>
    this.actions$.pipe(ofType(CoursesActions.LOAD_MORE_COURSES)).pipe(
      map((action) => action['payload']),
      concatMap((params: searchParams) => {
        return this.coursesService.loadMoreCourses(...params).pipe(
          map((courses) => new fromAction.LoadMoreCoursesSuccess(courses)),
          first(),
          catchError((error) => of(new fromAction.LoadMoreCoursesFail(error)))
        );
      })
    )
  );
  totalCourseNum$ = createEffect(() =>
    this.actions$.pipe(ofType(CoursesActions.TOTAL_COURSES_NUM)).pipe(
      map((action) => action['payload']),
      switchMap((searchText) => {
        return this.coursesService.getTotalCoursesNum(searchText).pipe(
          first(),
          map((number) => new fromAction.TotalCourseNumSuccess(number)),
          catchError((error) => of(new fromAction.TotalCourseNumFail(error)))
        );
      })
    )
  );

  editCourse$ = createEffect(() =>
    this.actions$.pipe(ofType(CoursesActions.EDIT_COURSE)).pipe(
      map((action) => action['payload']),
      switchMap((course: Course) => {
        return this.coursesService.updateCourse(course).pipe(
          map(() => new fromAction.EditCourseSuccess()),
          first(),
          tap(() => this.router.navigate(['courses'])),
          catchError((error) => of(new fromAction.EditCourseFail(error)))
        );
      })
    )
  );

  createCourse$ = createEffect(() =>
    this.actions$.pipe(ofType(CoursesActions.CREATE_COURSE)).pipe(
      map((action) => action['payload']),
      switchMap((course: Course) => {
        return this.coursesService.createCourse(course).pipe(
          map(() => new fromAction.CreateCourseSuccess()),
          first(),
          tap(() => this.router.navigate(['courses'])),
          catchError((error) => of(new fromAction.EditCourseFail(error)))
        );
      })
    )
  );

  getCourseById$ = createEffect(() =>
    this.actions$.pipe(ofType(CoursesActions.GET_COURSE_BY_ID)).pipe(
      map((action) => action['payload']),
      switchMap((courseId) => {
        return this.coursesService.getCourseById(courseId).pipe(
          map((course: Course) => new fromAction.GetCourseByIdSuccess(course)),
          first(),
          catchError((error) => of(new fromAction.GetCourseByIdFail(error)))
        );
      })
    )
  );
}
