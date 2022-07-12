import { Component, DoCheck } from '@angular/core';
import { Course } from './course';
import { CoursesService } from './courses.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements DoCheck {
  searchValue = '';
  courses!: Course[];
  constructor(private courseService: CoursesService) {}
  ngDoCheck(): void {
    this.courses = this.courseService.getCoursesList();
  }

  searchHandler(searchValue: string) {
    this.searchValue = searchValue;
  }
  deleteCourseHandler(courseForDelete: Course) {
    this.courseService.removeCourse(courseForDelete);
  }
}
