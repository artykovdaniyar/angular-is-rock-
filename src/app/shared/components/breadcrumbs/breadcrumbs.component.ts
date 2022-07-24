import { AfterContentChecked, Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CoursesService } from 'src/app/core/services/courses.service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  course?: Course;
  courseId = 0;
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.courseId = +window.location.pathname.replace(/\D/g, '');
  }
}
