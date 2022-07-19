import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../../shared/models/course';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses!: any;
  constructor(private http: HttpClient) {}

  // getCourseLength() {
  //   const length = this.fetchCourse().subscribe((courses) => {
  //     return courses;
  //   });
  //   return length;
  // }
  // fetchCourse() {
  //   return this.http.get<Course[]>('http://localhost:3004/courses');
  // }
  getCoursesList() {
    return this.http.get('http://localhost:3004/courses?start=1&count=10');
  }
  createCourse(course: Course): void {
    this.courses = [...this.courses, course];
  }
  getCourseById(id: number): any | undefined {
    return this.courses.find((course: any) => course.id === id);
  }
  removeCourse(courseForDelete: Course): void {
    this.courses = this.courses.filter((course: any) => {
      return course.id !== courseForDelete.id;
    });
  }
  updateCourse(updatedCourse: any) {
    this.courses = this.courses.map((course: any) =>
      course.id === updatedCourse.id ? updatedCourse : course
    );
  }
}
