import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses = [
    {
      name: 'Angular 9. Теория и Практика 2020.',
      id: 1,
      description:
        'Полное руководство для разработки крутейших динамических приложений. От глубокой теории до практики на Angular. Получите полное понимание того, как Angular работает в деталях и научитесь их использовать',
      duration: 1053,
      date: 1656871200000,
      topRated: false,
    },
    {
      name: 'Angular - The Complete Guide',
      id: 2,
      description:
        'Develop modern, complex, responsive and scalable web applications with Angular 14. Fully understand the architecture behind an Angular application and how to use it. Use the gained, deep understanding of the Angular fundamentals to quickly establish yourself as a frontend developer. Create single-page applications with one of the most modern JavaScript frameworks out there',
      duration: 2092,
      date: 1541700000000,
      topRated: true,
    },
    {
      name: '100 Angular Challenge',
      id: 3,
      description:
        'We will master all Angular has to offer by building 100 re-usable and practical Components, Directives, Services, Pipes and much more to be used in your personal or professional projects. Not only will we build 100 items, but we will also go over Jasmine and Unit Testing so we can write the most solid code possible and certify it does what it is supposed to.',
      duration: 120,
      date: 1658512800000,
      topRated: false,
    },
    {
      name: 'The Complete Angular Course: Beginner to Advanced',
      id: 4,
      description:
        "Angular is one of the most popular frameworks for building client apps with HTML, CSS and TypeScript. If you want to establish yourself as a front-end or a full-stack developer, you need to learn Angular. If you've been confused or frustrated jumping from one Angular 4 tutorial to another, you've come to the right place.",
      duration: 40,
      date: 1558612800000,
      topRated: false,
    },
  ];
  constructor() {}

  getCoursesList(): Course[] {
    return this.courses;
  }
  createCourse(course: Course): void {
    const newCourse = { ...course, id: this.courses.length + 1 };
    this.courses.push(newCourse);
  }
  getCourseById(id: number) {
    const course = this.courses.find((course) => {
      return course.id === id;
    });

    if (course) {
      return course;
    } else {
      return console.error(`No found any course by id ${id}`);
    }
  }
  removeCourse(courseForDelete: Course): void {
    this.courses = this.courses.filter((course) => {
      return course.id !== courseForDelete.id;
    });
  }
  updateCourse(updatedCourse: Course) {
    this.courses = this.courses.map((course) => {
      if (course.id === updatedCourse.id) {
        return updatedCourse;
      } else {
        return course;
      }
    });
  }
}
