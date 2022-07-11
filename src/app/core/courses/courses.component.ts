import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  searchValue = '';
  constructor() {}

  searchHandler(searchValue: string) {
    this.searchValue = searchValue;
  }
}
