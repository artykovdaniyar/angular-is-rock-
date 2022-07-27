import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Course } from '../../../../shared/models/course';
import {
  faClock,
  faCalendarDays,
  faPen,
  faTrash,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesItemComponent {
  faStar = faStar;
  faClock = faClock;
  faCalendarDays = faCalendarDays;
  faPen = faPen;
  faTrash = faTrash;

  constructor(private router: Router) {}

  @Input() course!: Course;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  deleteCourse(course: Course) {
    if (
      confirm(`Do you really want to delete
${course.name}`)
    ) {
      this.onDelete.emit(course.id);
    }
  }
  goToEditPage() {
    this.router.navigate([`courses/${this.course.id}`]);
  }
}
