import { formatDate } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-edit-course-date',
  templateUrl: './edit-course-date.component.html',
  styleUrls: ['./edit-course-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCourseDateComponent implements OnChanges {
  // courseDate = 0
  // courseDateValue = ''
  // @Input() date!: any
  // @Output() onSelectDate: EventEmitter<number> = new EventEmitter<number>;

  ngOnChanges(changes: SimpleChanges): void {
    // this.courseDateValue =  formatDate(this.date, 'yyyy-MM-dd', 'en');
  }
  // onInput(target: any) {
  //   this.courseDate = target.valueAsNumber;
  //   this.onSelectDate.emit(this.courseDate)
  // }
}
