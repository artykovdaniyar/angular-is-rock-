import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-edit-course-duration',
  templateUrl: './edit-course-duration.component.html',
  styleUrls: ['./edit-course-duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCourseDurationComponent implements OnInit {
  // courseDuration = 0;
  // constructor() {}
  // @Input() duration!: number
  // @Output() onEnterDuration: EventEmitter<number> = new EventEmitter<number>;
  ngOnInit(): void {
    //   this.courseDuration = this.duration
  }
  // onInput(target: any) {
  //   this.courseDuration = +target.value;
  //   this.onEnterDuration.emit(this.courseDuration)
  // }
}
