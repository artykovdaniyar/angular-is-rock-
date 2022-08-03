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
  error$ = new BehaviorSubject<boolean>(false);
  courses$ = new BehaviorSubject<Course[]>([]);
  isLoading$ = new BehaviorSubject<boolean>(false);

  totalCourseLength = 0;

  constructor(private http: HttpClient, private store: Store<CoursesState>) {}

  getCourses(
    searchText: string,
    startWith: number,
    coursePerPage: number
  ): Observable<Course[]> {
    this.store.dispatch(new fromStore.TotalCourseNum(searchText));

    this.store.dispatch(new fromStore.IsAllCoursesLoaded());
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
    return this.http
      .get<Course[]>(URLS.COURSES_PAGING(startWith, coursePerPage))
      .pipe(
        tap((res) => {
          if (res.length === 0) {
            this.store.dispatch(new fromStore.DataIsEmpty(true));
          }
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
  onError(error: any) {
    this.isLoading$.next(false);
    this.error$.next(true);
    console.log('ERROR MESSAGE:', error.message);
    return throwError(error);
  }

  updateCourse(updatedCourse: Course) {
    return this.http.patch<Course>(
      URLS.EDIT_COURSE(updatedCourse.id),
      updatedCourse
    );
  }

  removeCourse(courseId: number): void {
    this.http.delete(URLS.DELETE_COURSE(courseId)).subscribe(() => {
      let updatedCoursesList = this.courses$.value.filter(
        (course: Course) => course.id !== courseId
      );
      this.courses$.next(updatedCoursesList);
      // this.isAllCoursesLoaded();
      // this.isCoursesListEmpty();
    });
  }
  createCourse(course: Course): void {
    this.http.post(URLS.CREATE_COURSE, course).subscribe();
  }
}
