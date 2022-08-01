import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../../shared/models/course';
import * as fromStore from '../../pages/courses/store';
import {
  BehaviorSubject,
  catchError,
  map,
  mergeMap,
  Observable,
  of,
  tap,
  throwError,
} from 'rxjs';
import { URLS } from 'src/app/shared/urls/urls';
import { Store } from '@ngrx/store';
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  error$ = new BehaviorSubject<boolean>(false);
  courses$ = new BehaviorSubject<Course[]>([]);
  isLoading$ = new BehaviorSubject<boolean>(false);

  totalCourseLength = 0;

  constructor(
    private http: HttpClient,
    private store: Store<fromStore.CoursesStoreState>
  ) {}
  getCourses(searchText = ''): Observable<Course[]> {
    let startWith: number = 0;
    let coursePerPage: number = 10;

    this.store
      .select<number>(fromStore.startLoadWithSelector)
      .subscribe((stateNum) => {
        startWith = stateNum;
      });

    this.store
      .select<number>(fromStore.coursesPerPageSelector)
      .subscribe((coursePerPageNum) => {
        coursePerPage = coursePerPageNum;
      });

    if (searchText) {
      return this.fetchCoursesBySearch(searchText, startWith, coursePerPage);
    } else {
      return this.fetchCourse(startWith, coursePerPage);
    }
  }

  fetchCoursesBySearch(searchText = '', startNum = 0, coursePerPage = 10) {
    return this.store.select<Course[]>(fromStore.coursesSelector).pipe(
      map((courses: Course[]) => courses.length),
      mergeMap((length) => {
        return this.http
          .get<Course[]>(
            URLS.COURSES_SEARCH(searchText, startNum, coursePerPage)
          )
          .pipe(
            tap((res) => {
              if (res.length === 0 && !length) {
                this.store.dispatch(new fromStore.CousesNoFound(true));
              }
            })
          );
      })
    );
  }

  fetchCourse(startNum = 0, coursePerPage = 10) {
    return this.http
      .get<Course[]>(URLS.COURSES_PAGING(startNum, coursePerPage))
      .pipe(
        tap((res) => {
          if (res.length === 0) {
            this.store.dispatch(new fromStore.DataIsEmpty(true));
          }
        })
      );
  }

  loadMoreCourses(searchText = ''): Observable<Course[]> {
    let AllLoaded: boolean = false;
    this.store.dispatch(new fromStore.IsAllCoursesLoaded());
    this.store
      .select(fromStore.allCoursesLoadedSelector)
      .subscribe((state) => (AllLoaded = state));

    if (!AllLoaded) {
      return this.getCourses(searchText);
    } else {
      return of([]);
    }
  }

  getTotalCoursesNum(): Observable<number> {
    return this.http.get<number>(URLS.COURSES_LENGTH);
  }

  getCourseById(courseId: number): Observable<Course> {
    return this.http
      .get<Course>(`http://localhost:3004/courses/${courseId}`)
      .pipe(
        // tap(() => this.isLoading$.next(false)),
        catchError((error) => this.onError(error))
      );
  }

  // isCoursesListEmpty() {
  //   if (this.courses$.value.length === 0) {
  //     this.noData$.next(true);
  //   } else {
  //     this.noData$.next(false);
  //   }
  // }
  onError(error: any) {
    this.isLoading$.next(false);
    this.error$.next(true);
    console.log('ERROR MESSAGE:', error.message);
    return throwError(error);
  }

  updateCourse(updatedCourse: Course) {
    this.http
      .patch<Course>(URLS.EDIT_COURSE(updatedCourse.id), updatedCourse)
      .subscribe();
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
