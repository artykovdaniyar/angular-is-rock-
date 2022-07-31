import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { CoursesService } from 'src/app/core/services/courses.service';
import * as fromStore from '../store';
import { Course } from '../../../shared/models/course';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'courses-gallery',
  templateUrl: './courses-gallery.component.html',
  styleUrls: ['./courses-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesGalleryComponent implements OnInit {
  courses$: Observable<Course[]> = of([]);
  searchQuery = '';
  faTriangleExclamation = faTriangleExclamation;
  constructor(
    public coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromStore.CoursesStoreState>
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((query: Params) => {
      if (query['search']) {
        this.searchQuery = query['search'];
      }
    });
    this.courses$ = this.store.select<Course[]>(fromStore.getCourses);
    this.store.dispatch(new fromStore.GetCourses());
    // this.coursesService.getCourses(this.searchQuery);
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
