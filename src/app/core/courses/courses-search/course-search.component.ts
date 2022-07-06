import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss'],
})
export class CoursesSearchComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  @Output() onSubmit: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {}

  submitHandler(input: string) {
    this.onSubmit.emit(input);
  }
}
