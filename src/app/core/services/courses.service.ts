import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Course } from '../../shared/models/course';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  startWith = 0;
  coursePerPage = 10;
  noData$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  coursesNoFound$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  isAllCoursesLoaded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  totalCourseNum$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  courses$: BehaviorSubject<Course[]> = new BehaviorSubject<Course[]>([]);

  constructor(private http: HttpClient) {}

  fetchCourse(startNum = 0): void {
    this.isLoading$.next(true);
    let params = new HttpParams();
    params = params.append('start', startNum);
    params = params.append('count', this.coursePerPage);
    this.http
      .get<Course[]>('http://localhost:3004/courses', {
        params,
      })
      .pipe(
        tap(() => this.isLoading$.next(false)),
        tap((res) => {
          if (res.length === 0 && !this.courses$.value.length) {
            this.noData$.next(true);
          }
        })
      )
      .subscribe((courses) => {
        this.courses$.next([...this.courses$.value, ...courses]);
      });
  }
  getCourses(searchText = ''): Observable<Course[]> {
    this.coursesNoFound$.next(false);
    if (searchText) {
      this.startWith = 0;
      this.searchCourses(searchText, this.startWith);
    } else {
      this.fetchCourse(this.startWith);
    }

    return this.courses$;
  }

  loadMoreCourses(searchText = ''): void {
    if (!this.isAllCoursesLoaded$.value) {
      if (searchText) {
        this.startWith += this.coursePerPage;
        this.searchCourses(searchText, this.startWith);
      } else {
        this.startWith += this.coursePerPage;
        this.fetchCourse(this.startWith);
      }
    }

    this.isAllCoursesLoaded();
  }
  isAllCoursesLoaded(): void {
    if (this.startWith + this.coursePerPage >= this.totalCourseNum$.value) {
      this.isAllCoursesLoaded$.next(true);
    } else {
      this.isAllCoursesLoaded$.next(false);
    }
  }
  getTotalCoursesNum(): Observable<number> {
    this.http
      .get<Course[]>('http://localhost:3004/courses')
      .subscribe((coursesList) => {
        this.totalCourseNum$.next(coursesList.length);
      });
    return this.totalCourseNum$;
  }

  searchCourses(searchText = '', startNum = 0): void {
    this.isLoading$.next(true);
    let params = new HttpParams();
    params = params.append('textFragment', searchText);
    params = params.append('start', startNum);
    params = params.append('count', this.coursePerPage);

    this.http
      .get<Course[]>('http://localhost:3004/courses', {
        params,
      })
      .pipe(
        tap(() => this.isLoading$.next(false)),
        tap((res) => {
          if (res.length === 0 && !this.courses$.value.length) {
            this.coursesNoFound$.next(true);
          }
        })
      )
      .subscribe((courses) => {
        this.courses$.next([...this.courses$.value, ...courses]);
      });
  }
  resetRequest(): void {
    this.startWith = 0;
    this.courses$.next([]);
    this.isAllCoursesLoaded$.next(false);
  }

  createCourse(course: Course): void {
    // this.courses = [...this.courses, course];
  }
  getCourseById(id: number): any | undefined {
    // return this.courses.find((course: any) => course.id === id);
  }
  removeCourse(courseForDelete: Course): void {
    // this.courses = this.courses.filter((course: any) => {
    //   return course.id !== courseForDelete.id;
    // });
  }
  updateCourse(updatedCourse: any) {
    // this.courses = this.courses.map((course: any) =>
    //   course.id === updatedCourse.id ? updatedCourse : course
    // );
  }
}
