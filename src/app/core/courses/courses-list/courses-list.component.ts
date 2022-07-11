import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Counter } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit, DoCheck {
  faPlus = faPlus;
  @Input() searchValue = '';
  coursesList: Course[] = [];
  constructor(private coursesService: CoursesService) {}

  ngDoCheck(): void {
    this.coursesList = this.coursesService.courses;
  }
  ngOnInit(): void {}
  deleteEventEmit(course: Course) {
    this.coursesService.removeCourse(course);
  }
}
