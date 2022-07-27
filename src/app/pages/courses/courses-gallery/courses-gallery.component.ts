import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'courses-gallery',
  templateUrl: './courses-gallery.component.html',
  styleUrls: ['./courses-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesGalleryComponent implements OnInit {
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
