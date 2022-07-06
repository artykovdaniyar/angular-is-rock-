import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Counter } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  faPlus = faPlus;
  @Input() searchValue = '';
  @Input() coursesList: Course[] = [];
  constructor() {}

  @Output() onDelete: EventEmitter<Course> = new EventEmitter();

  ngOnInit(): void {}
  deleteEventEmit(course: Course) {
    this.onDelete.emit(course);
  }
}
