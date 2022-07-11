import { Component, EventEmitter, Output } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss'],
})
export class CoursesSearchComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  @Output() onSubmit: EventEmitter<string> = new EventEmitter<string>();

  submitHandler(input: string) {
    this.onSubmit.emit(input);
  }
}
