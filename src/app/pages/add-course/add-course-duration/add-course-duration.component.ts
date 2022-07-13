import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-course-duration',
  templateUrl: './add-course-duration.component.html',
  styleUrls: ['./add-course-duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCourseDurationComponent {
  courseDuration = 0;
  constructor() {}
  @Output() onEnterDuration: EventEmitter<number> = new EventEmitter<number>;

  onInput(target: any) {
    this.courseDuration = +target.value;
    this.onEnterDuration.emit(this.courseDuration)
  }
}
