import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Course } from '../../../shared/models/course';
import {
  faClock,
  faCalendarDays,
  faPen,
  faTrash,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesItemComponent {
  @Input() course!: Course;
  faStar = faStar;
  faClock = faClock;
  faCalendarDays = faCalendarDays;
  faPen = faPen;
  faTrash = faTrash;

  constructor() {}
  @Output() onDelete: EventEmitter<Course> = new EventEmitter<Course>();
  deleteCourse(course: Course) {
    if (
      confirm(`Do you really want to delete
${course.name}`)
    ) {
      this.onDelete.emit(course);
    }
  }
}
