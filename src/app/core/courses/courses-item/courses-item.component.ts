import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../models/course';
import {
  faClock,
  faCalendarDays,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss'],
})
export class CoursesItemComponent {
  @Input() course!: Course;
  faClock = faClock;
  faCalendarDays = faCalendarDays;
  faPen = faPen;
  faTrash = faTrash;
}
