import { Component, OnDestroy, OnInit, Query } from '@angular/core';
import { delay, iif, last, Subscription } from 'rxjs';
import { Course } from '../../shared/models/course';
import { CoursesService } from '../../core/services/courses.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  searchValue = '';
  searchQuery = '';
  totalCourseNum = 0;
  isLoading = false;
  isAllCourseLoaded = false;
  coursesNoFound = false;
  noData = false;

  constructor(
    private courseService: CoursesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((query: Params) => {
      if (query['search']) {
        this.searchValue = query['search'];
        this.searchQuery = query['search'];
      }
    });
    this.courseService.getCourses(this.searchValue).subscribe((courses) => {
      this.courses = courses;
    });

    this.courseService.getTotalCoursesNum().subscribe((num) => {
      this.totalCourseNum = num;
    });

    this.courseService.isAllCoursesLoaded$.subscribe((state) => {
      this.isAllCourseLoaded = state;
    });

    this.courseService.isLoading$.subscribe((state) => {
      this.isLoading = state;
    });
    this.courseService.coursesNoFound$.subscribe(
      (state) => (this.coursesNoFound = state)
    );
    this.courseService.noData$.subscribe((state) => {
      this.noData = state;
    });
  }

  loadMore(): void {
    this.courseService.loadMoreCourses(this.searchValue);
  }
  searchHandler(inputSearchValue: string): void {
    this.router.navigate(['/courses'], {
      queryParams: {
        search: inputSearchValue.toLowerCase(),
      },
    });
    this.courseService.resetRequest();
    this.courseService.getCourses(inputSearchValue);
  }
  deleteCourseHandler(courseForDelete: Course): void {
    this.courseService.removeCourse(courseForDelete);
  }
  resetSearch() {
    this.router.navigate(['/courses'], {
      queryParams: {},
    });
    this.searchValue = '';
    this.courseService.resetRequest();
    this.courseService.getCourses(this.searchValue);
  }
}
