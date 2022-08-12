import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../../../../shared/models/course';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListComponent {
  faPlus = faPlus;
  @Input() searchValue = '';
  @Output() onDelete: EventEmitter<number> = new EventEmitter();
  @Input() coursesList!: Course[] | null;
  constructor() {}

  identify(index: number, item: Course) {
    return item.name;
  }
  deleteEventEmit(courseId: number) {
    this.onDelete.emit(courseId);
  }
}
