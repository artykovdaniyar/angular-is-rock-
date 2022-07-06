import { Component, OnInit } from '@angular/core';
import { Course } from './models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  ngOnInit(): void {
    this.courses = [
      {
        name: 'Video Course 3. Name Tag',
        id: 1,
        description:
          "Learn about where you cna  find description, what information they include, how they work, and deatils about various components od a course description. Courses description report information about a university or college's classes. They're published both in coures catagogs thst outline degree requirements and in course schedules thst contain descriptions for all courses offered during",
        duration: '1h 28 min',
        date: 1656871200000,
        topRated: false,
      },
      {
        name: 'Video Course 2. Name Tag',
        id: 2,
        description:
          "Learn about where you cna  find description, what information they include, how they work, and deatils about various components od a course description. Courses description report information about a university or college's classes. They're published both in coures catagogs thst outline degree requirements and in course schedules thst contain descriptions for all courses offered during",
        duration: '1h 28 min',
        date: 1541700000000,
        topRated: true,
      },
      {
        name: 'Video Course 3. Name Tag',
        id: 3,
        description:
          "Learn about where you cna  find description, what information they include, how they work, and deatils about various components od a course description. Courses description report information about a university or college's classes. They're published both in coures catagogs thst outline degree requirements and in course schedules thst contain descriptions for all courses offered during",
        duration: '1h 28 min',
        date: 1658512800000,
        topRated: false,
      },
    ];
  }

  deleteCourseHandler(course: Course) {
    console.log(course.id);
  }
}
