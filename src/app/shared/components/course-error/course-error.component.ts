import { Component, OnInit } from '@angular/core';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'course-error',
  templateUrl: './course-error.component.html',
  styleUrls: ['./course-error.component.scss'],
})
export class CourseErrorComponent implements OnInit {
  faTriangleExclamation = faTriangleExclamation;
  constructor() {}

  ngOnInit(): void {}
}
