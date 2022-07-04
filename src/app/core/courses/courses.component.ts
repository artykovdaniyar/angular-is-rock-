import { Component, OnInit } from '@angular/core';
import { Course } from './models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses: Course[] = [
    {
      name: 'Video Course 1. Name Tag',
      id: 1,
      description:
        "Learn about where you cna  find description, what information they include, how they work, and deatils about various components od a course description. Courses description report information about a university or college's classes. They're published both in coures catagogs thst outline degree requirements and in course schedules thst contain descriptions for all courses offered during",
      duration: '1h 28 min',
      date: '9 Nov 2018',
    },
    {
      name: 'Video Course 1. Name Tag',
      id: 2,
      description:
        "Learn about where you cna  find description, what information they include, how they work, and deatils about various components od a course description. Courses description report information about a university or college's classes. They're published both in coures catagogs thst outline degree requirements and in course schedules thst contain descriptions for all courses offered during",
      duration: '1h 28 min',
      date: '9 Nov 2018',
    },
    {
      name: 'Video Course 1. Name Tag',
      id: 3,
      description:
        "Learn about where you cna  find description, what information they include, how they work, and deatils about various components od a course description. Courses description report information about a university or college's classes. They're published both in coures catagogs thst outline degree requirements and in course schedules thst contain descriptions for all courses offered during",
      duration: '1h 28 min',
      date: '9 Nov 2018',
    },
  ];
  deleteCourseHandler(course: Course) {
    console.log(course.id);
  }
}
