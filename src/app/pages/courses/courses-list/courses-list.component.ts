import {
  Component,
  DoCheck,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../../../shared/models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListComponent {
  faPlus = faPlus;
  @Input() searchValue = '';
  @Output() onDelete: EventEmitter<Course> = new EventEmitter();
  @Input() coursesList!: Course[];
  constructor() {}

  deleteEventEmit(course: Course) {
    this.onDelete.emit(course);
  }
}
