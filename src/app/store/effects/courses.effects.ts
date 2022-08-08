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
import { Router } from '@angular/router';
import { searchParams } from 'src/app/shared/models/requestParams';
import { Course } from 'src/app/shared/models/course';
import { Author } from '../../shared/models/author';

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
          map((number) => new fromAction.TotalCourseNumSuccess(number)),
          first(),
          catchError((error) => of(new fromAction.TotalCourseNumFail(error)))
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
  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(ofType(CoursesActions.DELETE_COURSE)).pipe(
      map((action) => action['payload']),
      switchMap((courseId: number) => {
        return this.coursesService.removeCourse(courseId).pipe(
          map(() => new fromAction.DeleteCourseSuccess()),
          first(),
          catchError((error) => of(new fromAction.DeleteCourseFail(error)))
        );
      })
    )
  );
  getAllAuthors$ = createEffect(() =>
    this.actions$.pipe(ofType(CoursesActions.GET_AUTHORS)).pipe(
      switchMap(() => {
        return this.coursesService.getAllAuthors().pipe(
          map(
            (authorsList: Author[]) =>
              new fromAction.GetAuthorsSuccess(authorsList)
          ),
          first(),
          catchError((error) => of(new fromAction.GetAuthorsFail(error)))
        );
      })
    )
  );
}
