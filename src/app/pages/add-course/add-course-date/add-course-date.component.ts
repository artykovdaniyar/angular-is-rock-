import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-course-date',
  templateUrl: './add-course-date.component.html',
  styleUrls: ['./add-course-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCourseDateComponent {
  courseDate = 0;
  @Output() onSelectDate: EventEmitter<number> = new EventEmitter<number>;
 
  onInput(target: any) {
    this.courseDate = target.valueAsNumber;
    this.onSelectDate.emit(this.courseDate)
  }
}
