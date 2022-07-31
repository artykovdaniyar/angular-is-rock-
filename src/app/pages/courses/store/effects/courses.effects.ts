import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { map, switchMap, catchError, switchMapTo } from 'rxjs/operators';

import { Actions, ofType, createEffect, Effect } from '@ngrx/effects';
import { CoursesActions } from '../actions';
import { CoursesService } from 'src/app/core/services/courses.service';
import { GetCoursesFail, GetCoursesSuccess } from '../actions/courses.actions';

@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) {}

  @Effect()
  courses$ = this.actions$.pipe(ofType(CoursesActions.GET_COURSES)).pipe(
    switchMap(() => {
      return this.coursesService.getCourses().pipe(
        map((courses) => new GetCoursesSuccess(courses)),
        catchError((error) => of(new GetCoursesFail(error)))
      );
    })
  );
}
