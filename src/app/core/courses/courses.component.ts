import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { Course } from './models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  searchValue = '';
  constructor(private courseService: CoursesService) {}
  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }
  searchHandler(searchValue: string) {
    this.searchValue = searchValue;
  }
  deleteCourseHandler(courseForDelete: Course) {
    this.courses = this.courses.filter((course) => {
      return course.id !== courseForDelete.id;
    });
  }
}
