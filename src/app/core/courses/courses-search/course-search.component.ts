import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss'],
})
export class CoursesSearchComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  constructor() {}

  ngOnInit(): void {}
}
