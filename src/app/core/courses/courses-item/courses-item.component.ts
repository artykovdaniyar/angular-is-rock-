import { Component, Input, OnInit } from '@angular/core';
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
  faClock = faClock;
  faCalendarDays = faCalendarDays;
  faPen = faPen;
  faTrash = faTrash;
}
