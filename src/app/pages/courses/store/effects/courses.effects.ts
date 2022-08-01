import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {
  map,
  switchMap,
  catchError,
  first,
  exhaustMap,
  concatMap,
} from 'rxjs/operators';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { CoursesService } from 'src/app/core/services/courses.service';
import { CoursesActions } from '../actions/courses.actions';
import * as fromAction from '../actions/courses.actions';

@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) {}

  getCourses$ = createEffect(() =>
    this.actions$.pipe(ofType(CoursesActions.GET_COURSES)).pipe(
      map((action) => action['payload']),
      exhaustMap((searchText) => {
        return this.coursesService.getCourses(searchText).pipe(
          first(),
          map((courses) => new fromAction.GetCoursesSuccess(courses)),
          catchError((error) => of(new fromAction.GetCoursesFail(error)))
        );
      })
    )
  );
  loadMoreCourses$ = createEffect(() =>
    this.actions$.pipe(ofType(CoursesActions.LOAD_MORE_COURSES)).pipe(
      map((action) => action['payload']),
      exhaustMap((searchText) => {
        return this.coursesService.loadMoreCourses(searchText).pipe(
          first(),
          map((courses) => new fromAction.LoadMoreCoursesSuccess(courses)),
          catchError((error) => of(new fromAction.LoadMoreCoursesFail(error)))
        );
      })
    )
  );
  totalCourseNum$ = createEffect(() =>
    this.actions$.pipe(ofType(CoursesActions.TOTAL_COURSES_NUM)).pipe(
      exhaustMap(() => {
        return this.coursesService.getTotalCoursesNum().pipe(
          first(),
          map((number) => new fromAction.TotalCourseNumSuccess(number)),
          catchError((error) => of(new fromAction.TotalCourseNumFail(error)))
        );
      })
    )
  );
}
