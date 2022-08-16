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
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs';

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
  conformText = '';
  constructor(private router: Router, public translate: TranslateService) {}

  @Input() course!: Course;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  deleteCourse(course: Course) {
    this.translate
      .get('PAGES.COURSES.COURSES_ITEM.CONFORM_FOR_DELETE', {
        courseName: this.course.name.toUpperCase(),
      })
      .pipe(take(1))
      .subscribe((res: string) => {
        this.conformText = res;
      });
    if (confirm(this.conformText)) {
      this.onDelete.emit(course.id);
    }
  }
  goToEditPage() {
    this.router.navigate([`courses/${this.course.id}`]);
  }
}
