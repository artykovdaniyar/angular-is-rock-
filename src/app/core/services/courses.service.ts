import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../../shared/models/course';
import * as fromStore from '../../pages/courses/store';
import {
  BehaviorSubject,
  exhaustMap,
  map,
  Observable,
  tap,
  throwError,
} from 'rxjs';
import { URLS } from 'src/app/shared/urls/urls';
import { Store } from '@ngrx/store';
import { CoursesState } from '../../pages/courses/store/state/courses.state';
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient, private store: Store<CoursesState>) {}

  getCourses(
    searchText: string,
    startWith: number,
    coursePerPage: number
  ): Observable<Course[]> {
    this.store.dispatch(new fromStore.TotalCourseNum(searchText));
    if (searchText) {
      return this.fetchCoursesBySearch(searchText, startWith, coursePerPage);
    } else {
      return this.fetchCourse(startWith, coursePerPage);
    }
  }

  fetchCoursesBySearch(
    searchText: string,
    startWith: number,
    coursePerPage: number
  ) {
    return this.store.select<Course[]>(fromStore.coursesSelector).pipe(
      map((courses: Course[]) => courses.length),
      exhaustMap((coursesLength) => {
        return this.http
          .get<Course[]>(
            URLS.COURSES_SEARCH(searchText, startWith, coursePerPage)
          )
          .pipe(
            tap((res) => {
              if (res.length === 0 && !coursesLength) {
                this.store.dispatch(new fromStore.CousesNoFound(true));
              }
            })
          );
      })
    );
  }

  fetchCourse(startWith: number, coursePerPage: number) {
    return this.store.select<Course[]>(fromStore.coursesSelector).pipe(
      map((courses: Course[]) => courses.length),
      exhaustMap((coursesLength) => {
        return this.http
          .get<Course[]>(URLS.COURSES_PAGING(startWith, coursePerPage))
          .pipe(
            tap((res) => {
              if (res.length === 0 && !coursesLength) {
                this.store.dispatch(new fromStore.DataIsEmpty(true));
              }
            })
          );
      })
    );
  }

  loadMoreCourses(
    searchText: string,
    startWith: number,
    coursePerPage: number
  ): Observable<Course[]> {
    return this.getCourses(searchText, startWith, coursePerPage);
  }

  getTotalCoursesNum(searchText: string): Observable<number> {
    return this.http.get<number>(URLS.COURSES_LENGTH(searchText));
  }

  getCourseById(courseId: number): Observable<Course> {
    return this.http.get<Course>(`http://localhost:3004/courses/${courseId}`);
  }

  updateCourse(updatedCourse: Course): Observable<Course> {
    return this.http.patch<Course>(
      URLS.EDIT_COURSE(updatedCourse.id),
      updatedCourse
    );
  }

  removeCourse(courseId: number) {
    return this.http.delete(URLS.DELETE_COURSE(courseId));

    // this.isCoursesListEmpty();
  }
  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(URLS.CREATE_COURSE, course);
  }
}
