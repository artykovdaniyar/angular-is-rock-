import { Component, OnDestroy, OnInit } from '@angular/core';
import { Course } from '../../shared/models/course';
import { CoursesService } from '../../core/services/courses.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit, OnDestroy {
  searchQuery = '';
  faTriangleExclamation = faTriangleExclamation;
  constructor(
    public coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((query: Params) => {
      if (query['search']) {
        this.searchQuery = query['search'];
      }
    });
    this.coursesService.getCourses(this.searchQuery);
  }

  loadMore(): void {
    this.coursesService.loadMoreCourses(this.searchQuery);
  }
  searchHandler(inputSearchValue: string): void {
    this.router.navigate(['/courses'], {
      queryParams: {
        search: inputSearchValue.toLowerCase(),
      },
    });
    this.coursesService.resetRequest();
    this.coursesService.getCourses(inputSearchValue);
  }
  deleteCourseHandler(courseId: number): void {
    this.coursesService.removeCourse(courseId);
  }
  resetSearch(): void {
    this.router.navigate(['/courses'], {
      queryParams: {},
    });
    this.searchQuery = '';
    this.coursesService.resetRequest();
    this.coursesService.getCourses(this.searchQuery);
  }

  ngOnDestroy(): void {
    this.coursesService.resetRequest();
  }
}
