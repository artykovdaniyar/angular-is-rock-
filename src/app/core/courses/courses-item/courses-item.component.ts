import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../models/course';
import {
  faClock,
  faCalendarDays,
  faPen,
  faTrash,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss'],
})
export class CoursesItemComponent {
  @Input() course!: Course;
  faStar = faStar;
  faClock = faClock;
  faCalendarDays = faCalendarDays;
  faPen = faPen;
  faTrash = faTrash;

  constructor(private coursesService: CoursesService) {}

  deleteCourse(course: Course) {
    if (
      confirm(`Do you really want to delete
${course.name}?`)
    ) {
      this.coursesService.removeCourse(course);
    }
  }
}
