import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course-authors',
  templateUrl: './add-course-authors.component.html',
  styleUrls: ['./add-course-authors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCourseAuthorsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
