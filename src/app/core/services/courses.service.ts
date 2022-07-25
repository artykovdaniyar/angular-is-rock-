import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Course } from '../../shared/models/course';
import {
  BehaviorSubject,
  catchError,
  filter,
  Observable,
  tap,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  startWith = 0;
  coursePerPage = 10;
  error$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  courses$: BehaviorSubject<Course[]> = new BehaviorSubject<Course[]>([]);
  totalCourseNum$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  noData$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  coursesNoFound$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isAllCoursesLoaded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private http: HttpClient) {}

  fetchCourse(startNum = 0): void {
    this.isLoading$.next(true);
    this.getTotalCoursesNum();
    this.http
      .get<Course[]>(
        `http://localhost:3004/courses?start=${startNum}&count=${this.coursePerPage}`
      )
      .subscribe(
        (courses) => {
          this.isLoading$.next(false);
          this.courses$.next([...this.courses$.value, ...courses]);
          this.isCoursesListEmpty();
        },
        (error) => this.onError(error)
      );
  }
  getCourses(searchText = ''): void {
    this.coursesNoFound$.next(false);
    if (searchText) {
      this.startWith = 0;
      this.fetchCoursesBySearch(searchText, this.startWith);
    } else {
      this.fetchCourse(this.startWith);
    }
  }

  loadMoreCourses(searchText = ''): void {
    this.isAllCoursesLoaded();
    if (!this.isAllCoursesLoaded$.value) {
      if (searchText) {
        this.startWith += this.coursePerPage;
        this.fetchCoursesBySearch(searchText, this.startWith);
      } else {
        this.startWith += this.coursePerPage;
        this.fetchCourse(this.startWith);
      }
    }
  }
  isAllCoursesLoaded(): void {
    if (
      this.startWith + this.coursePerPage >= this.totalCourseNum$.value &&
      this.courses$.value.length !== 0
    ) {
      this.isAllCoursesLoaded$.next(true);
    } else {
      this.isAllCoursesLoaded$.next(false);
    }
  }
  getTotalCoursesNum(): void {
    this.http
      .get<number>('http://localhost:3004/courses/length')
      .subscribe((totalNum) => {
        this.totalCourseNum$.next(totalNum);
      });
  }

  fetchCoursesBySearch(searchText = '', startNum = 0): void {
    this.isLoading$.next(true);
    this.http
      .get<Course[]>(
        `http://localhost:3004/courses?textFragment=${searchText}&start=${startNum}&count=${this.coursePerPage}`
      )
      .pipe(
        tap(() => this.isLoading$.next(false)),
        tap((res) => {
          if (res.length === 0 && !this.courses$.value.length) {
            this.coursesNoFound$.next(true);
          }
        })
      )
      .subscribe(
        (courses) => {
          this.courses$.next([...this.courses$.value, ...courses]);
        },
        (error) => this.onError(error)
      );
  }

  resetRequest(): void {
    this.error$.next(false);
    this.startWith = 0;
    this.courses$.next([]);
    this.isAllCoursesLoaded$.next(false);
  }
  updateCourse(updatedCourse: Course) {
    this.http
      .patch<Course>(
        `http://localhost:3004/courses/${updatedCourse.id}`,
        updatedCourse
      )
      .subscribe((updatedCourse: Course) => {
        let updatedCoursesList = this.courses$.value.map((course: Course) => {
          if (course.id === updatedCourse.id) {
            return updatedCourse;
          } else {
            return course;
          }
        });
        this.courses$.next(updatedCoursesList);
      });
  }

  getCourseById(courseId: number): Observable<Course> {
    this.isLoading$.next(true);
    return this.http
      .get<Course>(`http://localhost:3004/courses/${courseId}`)
      .pipe(
        tap(() => this.isLoading$.next(false)),
        catchError((error) => this.onError(error))
      );
  }
  onError(error: any) {
    this.isLoading$.next(false);
    this.error$.next(true);
    console.log('ERROR MESSAGE:', error.message);
    return throwError(error);
  }
  isCoursesListEmpty() {
    if (this.courses$.value.length === 0) {
      this.noData$.next(true);
    } else {
      this.noData$.next(false);
    }
  }
  removeCourse(courseId: number): void {
    this.http
      .delete(`http://localhost:3004/courses/${courseId}`)
      .subscribe(() => {
        let updatedCoursesList = this.courses$.value.filter(
          (course: Course) => course.id !== courseId
        );
        this.courses$.next(updatedCoursesList);
        this.isAllCoursesLoaded();
        this.isCoursesListEmpty();
      });
  }
  createCourse(course: Course): void {
    this.http.post(`http://localhost:3004/courses`, course);
  }
}
