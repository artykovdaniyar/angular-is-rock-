import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'course-title',
  templateUrl: './course-title.component.html',
  styleUrls: ['./course-title.component.scss'],
})
export class CourseTitleComponent implements OnInit {
  name!: FormControl;
  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit(): void {
    this.name = this.formGroupDirective.control.get('name') as FormControl;
  }
}
