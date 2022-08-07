import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'course-description',
  templateUrl: './course-description.component.html',
  styleUrls: ['./course-description.component.scss'],
})
export class CourseDescriptionComponent implements OnInit {
  description!: FormControl;
  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit(): void {
    this.description = this.formGroupDirective.control.get(
      'description'
    ) as FormControl;
  }
}
