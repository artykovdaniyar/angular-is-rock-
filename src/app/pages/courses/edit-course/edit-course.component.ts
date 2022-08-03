import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Author } from 'src/app/shared/models/author';
import { Course } from 'src/app/shared/models/course';
import * as fromStore from '../store';
import { CoursesState } from '../store/state';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit {
  form!: FormGroup;
  course$!: Observable<Course | undefined>;
  courseId = 0;
  loading: boolean = false;
  error: boolean = false;
  authors?: Author[];

  constructor(
    private store: Store<CoursesState>,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl(''),
      description: new FormControl(''),
      length: new FormControl(0),
      date: new FormControl(''),
      authors: new FormControl([]),
      isTopRated: new FormControl(false),
    });

    this.route.params.subscribe(({ id }) => {
      this.courseId = +id;
    });
    this.store
      .select<boolean>(fromStore.coursesLoadingSelector)
      .subscribe((state) => {
        this.loading = state;
      });
    this.store
      .select<boolean>(fromStore.coursesErrorSelector)
      .subscribe((state) => {
        this.error = state;
      });
    this.store.dispatch(new fromStore.GetCourseById(this.courseId));
    this.store.select(fromStore.courseDetailsSelector).subscribe((course) => {
      if (course) {
        this.form.patchValue({
          id: course?.id,
          name: course?.name,
          description: course?.description,
          length: course?.length,
          date: this.datePipe.transform(course?.date, 'yyyy-MM-dd'),
          authors: course?.authors,
          isTopRated: course?.isTopRated,
        });
        this.authors = course?.authors;
      }
    });
  }

  updateAuthorsHandler(newAuthorsList: Author[]) {
    this.form.get('authors')?.patchValue(newAuthorsList);
  }

  onSubmit() {
    this.store.dispatch(new fromStore.EditCourse(this.form.value));
    // this.coursesService.updateCourse(this.form.value);

    this.goToCoursesPage();
  }
  goToCoursesPage() {
    this.router.navigate(['courses']);
  }
}
