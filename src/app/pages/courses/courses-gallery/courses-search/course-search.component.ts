import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'courses-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss'],
})
export class CoursesSearchComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  searchValue = '';
  @Input() searchQuery = '';
  @Output() onSubmit: EventEmitter<string> = new EventEmitter<string>();
  @Output() onReset: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.searchValue = this.searchQuery ? this.searchQuery : '';
  }

  onInput(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    this.searchValue = value;
  }

  resetFormHadler() {
    this.searchValue = '';
    this.onReset.emit(true);
  }

  submitHandler(fragmentForSerch: string) {
    this.onSubmit.emit(fragmentForSerch);
  }
}
