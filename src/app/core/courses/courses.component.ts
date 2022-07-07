import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { Course } from './models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  searchValue = '';
  constructor() {}
  ngOnInit(): void {}
  searchHandler(searchValue: string) {
    this.searchValue = searchValue;
  }
}
