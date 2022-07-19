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
export class BreadcrumbsComponent implements OnInit, DoCheck {
  course?: Course;
  courseId = 0;
  isAuthenticated = false;
  constructor(
    private authService: AuthService,
    private courseService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngDoCheck(): void {
    this.courseId = +window.location.pathname.replace(/\D/g, '');
  }
  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((state) => {
      this.isAuthenticated = state;
    });
  }
}
