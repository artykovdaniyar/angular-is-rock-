import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import { Course } from '../../../shared/models/course';
import { Observable, of, tap } from 'rxjs';
import { CoursesState } from '../store/state';

@Component({
  selector: 'courses-gallery',
  templateUrl: './courses-gallery.component.html',
  styleUrls: ['./courses-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesGalleryComponent implements OnInit {
  startWith = 0;
  coursePerPage = 10;
  courses$: Observable<Course[]> = of([]);
  loading$: Observable<boolean> = of(false);
  error$: Observable<boolean> = of(false);
  allCoursesLoaded$: Observable<boolean> = of(false);
  totalCourseNum$: Observable<number> = of(0);
  dataIsEmpty$: Observable<boolean> = of(false);
  coursesNoFound$: Observable<boolean> = of(false);
  searchQuery = '';
  faTriangleExclamation = faTriangleExclamation;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<CoursesState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new fromStore.ResetCoursesState());
    this.route.queryParams.subscribe((query: Params) => {
      if (query['search']) {
        this.searchQuery = query['search'];
      }
    });
    this.store.dispatch(
      new fromStore.GetCourses([
        this.searchQuery,
        this.startWith,
        this.coursePerPage,
      ])
    );

    this.store
      .select<number>(fromStore.startLoadWithSelector)
      .pipe(tap((value) => console.log(value)))
      .subscribe((stateNum) => (this.startWith = stateNum));

    this.store
      .select<number>(fromStore.coursesPerPageSelector)
      .subscribe((coursePerPageNum) => (this.coursePerPage = coursePerPageNum));

    this.courses$ = this.store.select<Course[]>(fromStore.coursesSelector);
    this.loading$ = this.store.select<boolean>(
      fromStore.coursesLoadingSelector
    );
    this.allCoursesLoaded$ = this.store.select<boolean>(
      fromStore.allCoursesLoadedSelector
    );
    this.error$ = this.store.select<boolean>(fromStore.coursesErrorSelector);
    this.dataIsEmpty$ = this.store.select<boolean>(
      fromStore.dataIsEmptySelector
    );
    this.coursesNoFound$ = this.store.select<boolean>(
      fromStore.coursesNoFoundSelector
    );
  }

  loadMore(): void {
    this.store.dispatch(new fromStore.NextPage());
    console.log(this.startWith);
    this.store.dispatch(
      new fromStore.LoadMoreCourses([
        this.searchQuery,
        this.startWith,
        this.coursePerPage,
      ])
    );
  }
  searchHandler(inputSearchValue: string): void {
    this.router.navigate(['/courses'], {
      queryParams: {
        search: inputSearchValue.toLowerCase(),
      },
    });
    this.store.dispatch(new fromStore.ResetCoursesState());
    this.store.dispatch(
      new fromStore.GetCourses([
        inputSearchValue,
        this.startWith,
        this.coursePerPage,
      ])
    );
  }
  deleteCourseHandler(courseId: number): void {
    // this.coursesService.removeCourse(courseId);
  }
  resetSearch(): void {
    this.router.navigate(['/courses']);
    this.searchQuery = '';
    this.store.dispatch(new fromStore.ResetCoursesState());
    this.store.dispatch(
      new fromStore.GetCourses([
        this.searchQuery,
        this.startWith,
        this.coursePerPage,
      ])
    );
  }

  ngOnDestroy(): void {}
}
