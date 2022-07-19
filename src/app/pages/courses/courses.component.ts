import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Course } from '../../shared/models/course';
import { CoursesService } from '../../core/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements DoCheck, OnInit {
  searchValue = '';
  courses$!: any;
  constructor(private courseService: CoursesService) {}
  ngOnInit(): void {
    this.courses$ = this.courseService.getCoursesList();
  }
  ngDoCheck(): void {}

  searchHandler(searchValue: string) {
    this.searchValue = searchValue;
  }
  deleteCourseHandler(courseForDelete: Course) {
    this.courseService.removeCourse(courseForDelete);
  }
}
