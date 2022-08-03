import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Course } from 'src/app/shared/models/course';
import { Author } from '../../../shared/models/author';
import { CoursesState } from '../store/state';
import * as fromStore from '../store';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit {
  form!: FormGroup;
  course$!: Observable<Course>;
  courseId = 0;
  loading = false;
  error = false;

  constructor(private router: Router, private store: Store<CoursesState>) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.form = new FormGroup({
      id: new FormControl(+(Math.random() * (9 - 1) + 1).toFixed(2)),
      name: new FormControl(''),
      description: new FormControl(''),
      length: new FormControl(),
      date: new FormControl(''),
      authors: new FormControl([]),
      isTopRated: new FormControl(false),
    });
    this.store
      .select<boolean>(fromStore.coursesLoadingSelector)
      .subscribe((state) => (this.loading = state));
    this.store
      .select<boolean>(fromStore.coursesErrorSelector)
      .subscribe((state) => (this.error = state));
  }

  updateAuthorsHandler(newAuthorsList: Author[]) {
    this.form.get('authors')?.patchValue(newAuthorsList);
  }
  onSubmit() {
    this.store.dispatch(new fromStore.CreateCourse(this.form.value));
  }
  goToCoursesPage() {
    this.router.navigate(['courses']);
  }
}
